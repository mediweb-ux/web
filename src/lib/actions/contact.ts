"use server"

import { formSchema } from "@/lib/schemas"
import { z } from "zod"
import { sendBothEmails, checkEmailServiceHealth } from "@/lib/services/email"

// Type definitions for the server action
export type ContactFormData = z.infer<typeof formSchema>

export interface ActionResult {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

/**
 * Logs form submission events with structured data for monitoring and debugging
 * Enhanced with additional metadata for better debugging and monitoring
 */
function logFormEvent(level: 'info' | 'warn' | 'error', message: string, data: Record<string, any>) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    service: 'contact-form',
    environment: process.env.NODE_ENV || 'development',
    ...data,
  }

  // Add request context if available
  if (typeof window === 'undefined') {
    (logEntry as any).serverSide = true
  }

  switch (level) {
    case 'info':
      console.log(`[CONTACT-FORM] ${message}`, logEntry)
      break
    case 'warn':
      console.warn(`[CONTACT-FORM] ${message}`, logEntry)
      break
    case 'error':
      console.error(`[CONTACT-FORM] ${message}`, logEntry)
      break
  }

  // In production, you might want to send logs to external monitoring service
  if (process.env.NODE_ENV === 'production' && level === 'error') {
    // TODO: Integrate with monitoring service like Sentry, LogRocket, etc.
    // Example: Sentry.captureException(new Error(message), { extra: logEntry })
  }
}

/**
 * Extracts and validates form data from FormData object
 */
function extractFormData(formData: FormData): Record<string, any> {
  return {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
    reasons: formData.getAll("reasons") as string[],
    website: formData.get("website") as string,
  }
}

/**
 * Processes validation errors into a structured format for client consumption
 */
function processValidationErrors(error: z.ZodError): Record<string, string[]> {
  const fieldErrors: Record<string, string[]> = {}
  
  error.issues.forEach((issue) => {
    const fieldName = issue.path[0] as string
    if (!fieldErrors[fieldName]) {
      fieldErrors[fieldName] = []
    }
    fieldErrors[fieldName].push(issue.message)
  })

  return fieldErrors
}

/**
 * Server action for processing contact form submissions
 * Handles validation, spam detection, and comprehensive error management
 * 
 * @param formData - FormData object containing form submission data
 * @returns ActionResult with success status, message, and optional field errors
 */
export async function submitContactForm(formData: FormData): Promise<ActionResult> {
  const submissionId = `sub_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`
  
  try {
    // Perform early health check to catch configuration issues
    const healthCheck = await checkEmailServiceHealth()
    if (!healthCheck.healthy) {
      logFormEvent('error', 'Email service health check failed', {
        submissionId,
        issues: healthCheck.issues,
        configuration: healthCheck.configuration,
      })
      
      return {
        success: false,
        message: "Tjenesten er midlertidig utilgjengelig. Vennligst prøv igjen senere!",
      }
    }

    // Extract form data
    const rawData = extractFormData(formData)

    // Log form submission attempt (without sensitive data)
    logFormEvent('info', 'Contact form submission attempt', {
      submissionId,
      hasName: !!rawData.name,
      hasEmail: !!rawData.email,
      hasMessage: !!rawData.message,
      reasonsCount: rawData.reasons?.length || 0,
      honeypotTriggered: !!rawData.website,
    })

    // Honeypot spam detection - requirement 3.3
    if (rawData.website && rawData.website.trim() !== "") {
      logFormEvent('warn', 'Spam detected via honeypot field', {
        submissionId,
        honeypotValue: rawData.website.substring(0, 50), // Limit logged value length
      })
      
      // Return success to avoid revealing spam detection to bots
      return {
        success: true,
        message: "Skjema sendt inn. Vi tar kontakt med deg snart!",
      }
    }

    // Server-side validation using existing Zod schema - requirement 3.2
    const validationResult = formSchema.safeParse(rawData)

    if (!validationResult.success) {
      const fieldErrors = processValidationErrors(validationResult.error)

      logFormEvent('warn', 'Skjemavalidering feilet', {
        submissionId,
        errorCount: validationResult.error.issues.length,
        fields: Object.keys(fieldErrors),
      })

      return {
        success: false,
        message: "Vennligst rett opp feilene i skjemaet og prøv igjen.",
        errors: fieldErrors,
      }
    }

    const validatedData = validationResult.data

    // Log successful validation
    logFormEvent('info', 'Form validation successful', {
      submissionId,
      name: validatedData.name,
      email: validatedData.email,
      reasonsCount: validatedData.reasons.length,
      messageLength: validatedData.message.length,
    })

    // Send emails using the email service - requirements 1.1, 2.1, 4.4
    try {
      const emailStartTime = Date.now()
      const emailResult = await sendBothEmails(validatedData)
      const emailDuration = Date.now() - emailStartTime

      // Log email sending results with performance metrics
      logFormEvent('info', 'Email sending completed', {
        submissionId,
        userEmailSent: emailResult.userEmailSent,
        ownerEmailSent: emailResult.ownerEmailSent,
        errorCount: emailResult.errors.length,
        duration: `${emailDuration}ms`,
        performance: emailDuration > 5000 ? 'slow' : emailDuration > 2000 ? 'moderate' : 'fast',
      })

      // Handle partial failures - requirement 4.4
      if (emailResult.errors.length > 0) {
        logFormEvent('warn', 'Partial email failure detected', {
          submissionId,
          errors: emailResult.errors,
          userEmailSent: emailResult.userEmailSent,
          ownerEmailSent: emailResult.ownerEmailSent,
          criticalFailure: !emailResult.userEmailSent,
        })
      }

      // If user email failed, this is a critical error for user experience
      if (!emailResult.userEmailSent) {
        logFormEvent('error', 'User confirmation email failed - critical error', {
          submissionId,
          errors: emailResult.errors,
          ownerEmailSent: emailResult.ownerEmailSent,
          impact: 'critical - user will not receive confirmation',
        })

        // Provide specific error message based on error type
        let userMessage = "Det oppstod en feil ved sending av bekreftelse-e-post. Vennligst prøv igjen eller kontakt oss direkte."
        
        // Check if it's a configuration error
        if (emailResult.errors.some(error => error.includes('environment variable'))) {
          logFormEvent('error', 'Email configuration error detected', {
            submissionId,
            configurationIssue: true,
          })
          userMessage = "Det oppstod en teknisk feil. Vennligst prøv igjen senere."
        }

        return {
          success: false,
          message: userMessage,
        }
      }

      // Success response - even if owner email failed, user experience is maintained
      // Log different success levels based on email results
      if (emailResult.ownerEmailSent) {
        logFormEvent('info', 'Form processing completed successfully - all emails sent', {
          submissionId,
          fullSuccess: true,
        })
      } else {
        logFormEvent('info', 'Form processing completed with partial success - user email sent', {
          submissionId,
          partialSuccess: true,
          ownerNotificationFailed: true,
        })
      }

      return {
        success: true,
        message: "Skjema sendt inn. Vi tar kontakt med deg snart!",
      }

    } catch (error) {
      // Email service error handling - requirement 4.1, 4.4
      logFormEvent('error', 'Email service error - unexpected exception', {
        submissionId,
        error: error instanceof Error ? error.message : "Unknown email error",
        stack: error instanceof Error ? error.stack : undefined,
        errorType: error instanceof Error ? error.constructor.name : typeof error,
        severity: 'high',
      })

      // Provide user-friendly error message based on error type
      let userMessage = "Det oppstod en feil ved sending av e-post. Vennligst prøv igjen senere."
      
      if (error instanceof Error) {
        // Handle specific error types
        if (error.message.includes('network') || error.message.includes('timeout')) {
          userMessage = "Det oppstod en nettverksfeil. Vennligst sjekk internettforbindelsen din og prøv igjen."
        } else if (error.message.includes('rate limit')) {
          userMessage = "For mange forespørsler. Vennligst vent et øyeblikk før du prøver igjen."
        }
      }

      return {
        success: false,
        message: userMessage,
      }
    }

  } catch (error) {
    // Comprehensive error logging - requirement 4.1, 4.3
    logFormEvent('error', 'Server action error - unexpected exception', {
      submissionId,
      error: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
      type: error instanceof Error ? error.constructor.name : typeof error,
      severity: 'critical',
      context: 'server-action-top-level',
    })

    // Determine appropriate user message based on error type
    let userMessage = "Det oppstod en feil ved innsending av skjemaet. Vennligst prøv igjen senere."
    
    if (error instanceof Error) {
      // Handle specific error categories
      if (error.message.includes('timeout') || error.message.includes('ETIMEDOUT')) {
        userMessage = "Forespørselen tok for lang tid. Vennligst prøv igjen."
        logFormEvent('warn', 'Timeout error detected', { submissionId })
      } else if (error.message.includes('ENOTFOUND') || error.message.includes('network')) {
        userMessage = "Nettverksfeil oppdaget. Vennligst sjekk internettforbindelsen din og prøv igjen."
        logFormEvent('warn', 'Network error detected', { submissionId })
      } else if (error.message.includes('rate limit') || error.message.includes('429')) {
        userMessage = "For mange forespørsler. Vennligst vent et øyeblikk før du prøver igjen."
        logFormEvent('warn', 'Rate limit error detected', { submissionId })
      }
    }

    // Return user-friendly error message without exposing technical details - requirement 4.3
    return {
      success: false,
      message: userMessage,
    }
  }
}/**
 * Utility function to get contact form service metrics
 * Useful for monitoring and debugging purposes
 */
export async function getContactFormMetrics() {
  return {
    service: 'contact-form',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    features: {
      serverActions: true,
      zodValidation: true,
      honeypotProtection: true,
      structuredLogging: true,
      partialFailureHandling: true,
    },
  }
}

/**
 * Development helper function to test error handling scenarios
 * Should only be used in development environment
 */
export async function testErrorScenarios(scenario: 'validation' | 'email' | 'server'): Promise<ActionResult> {
  if (process.env.NODE_ENV === 'production') {
    return {
      success: false,
      message: "Test functions are not available in production",
    }
  }

  const testId = `test_${Date.now()}`
  
  logFormEvent('info', `Testing error scenario: ${scenario}`, { testId })

  switch (scenario) {
    case 'validation':
      return {
        success: false,
        message: "Test validation error",
        errors: {
          name: ["Test error for name field"],
          email: ["Test error for email field"],
        },
      }
    
    case 'email':
      logFormEvent('error', 'Test email service error', { testId, scenario })
      return {
        success: false,
        message: "Test email service error - this is a simulated error for testing",
      }
    
    case 'server':
      logFormEvent('error', 'Test server error', { testId, scenario })
      return {
        success: false,
        message: "Test server error - this is a simulated error for testing",
      }
    
    default:
      return {
        success: false,
        message: "Unknown test scenario",
      }
  }
}