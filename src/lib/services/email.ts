"use server";

import { Resend } from 'resend';
import { z } from 'zod';
import { formSchema } from '../schemas';
import { EmailTemplate } from '@/components/contactform-email';
import { OwnerNotificationEmail } from '@/components/owner-notification-email';

// Type for form data
type ContactFormData = z.infer<typeof formSchema>;

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration
const EMAIL_CONFIG = {
  from: `MediWeb Solutions <${process.env.RESEND_FROM_EMAIL}>`,
  ownerEmail: process.env.RESEND_TO_CONTACT_EMAIL || '',
} as const;

/**
 * Enhanced logging function for email service operations
 */
function logEmailEvent(level: 'info' | 'warn' | 'error', message: string, data: Record<string, any>) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    service: 'email-service',
    environment: process.env.NODE_ENV || 'development',
    ...data,
  }

  switch (level) {
    case 'info':
      console.log(`[EMAIL-SERVICE] ${message}`, logEntry)
      break
    case 'warn':
      console.warn(`[EMAIL-SERVICE] ${message}`, logEntry)
      break
    case 'error':
      console.error(`[EMAIL-SERVICE] ${message}`, logEntry)
      break
  }

  // In production, send critical errors to monitoring service
  if (process.env.NODE_ENV === 'production' && level === 'error') {
    // TODO: Integrate with monitoring service
    // Example: Sentry.captureException(new Error(message), { extra: logEntry })
  }
}

/**
 * Send confirmation email to the user who submitted the form
 * Enhanced with comprehensive error handling and logging
 */
export async function sendUserConfirmation(data: ContactFormData): Promise<void> {
  const emailId = `user_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
  
  logEmailEvent('info', 'Attempting to send user confirmation email', {
    emailId,
    recipientEmail: data.email,
    senderEmail: EMAIL_CONFIG.from,
  })

  try {
    // Validate email configuration before sending
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY environment variable is not configured')
    }

    if (!process.env.RESEND_FROM_EMAIL) {
      throw new Error('RESEND_FROM_EMAIL environment variable is not configured')
    }

    const { data: emailData, error } = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: [data.email],
      subject: 'Innsendt skjema - kopi av melding',
      react: EmailTemplate({
        name: data.name,
        email: data.email,
        message: data.message,
        reasons: data.reasons,
      }),
    });

    if (error) {
      logEmailEvent('error', 'Resend API returned error for user confirmation', {
        emailId,
        error: error,
        recipientEmail: data.email,
      })
      throw new Error(`Failed to send user confirmation email: ${JSON.stringify(error)}`);
    }

    logEmailEvent('info', 'User confirmation email sent successfully', {
      emailId,
      resendId: emailData?.id,
      recipientEmail: data.email,
    })

  } catch (error) {
    logEmailEvent('error', 'User confirmation email failed', {
      emailId,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      recipientEmail: data.email,
      errorType: error instanceof Error ? error.constructor.name : typeof error,
    })

    // Re-throw with enhanced error message for upstream handling
    throw new Error(
      error instanceof Error 
        ? `User confirmation email failed: ${error.message}`
        : 'Unknown error occurred while sending user confirmation email'
    );
  }
}

/**
 * Send notification email to the site owner about the form submission
 * Enhanced with comprehensive error handling and logging
 */
export async function sendOwnerNotification(data: ContactFormData): Promise<void> {
  const emailId = `owner_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
  
  logEmailEvent('info', 'Attempting to send owner notification email', {
    emailId,
    ownerEmail: EMAIL_CONFIG.ownerEmail,
    senderEmail: EMAIL_CONFIG.from,
    submitterEmail: data.email,
  })

  try {
    // Validate configuration
    if (!EMAIL_CONFIG.ownerEmail) {
      throw new Error('RESEND_TO_CONTACT_EMAIL environment variable is not configured');
    }

    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY environment variable is not configured')
    }

    if (!process.env.RESEND_FROM_EMAIL) {
      throw new Error('RESEND_FROM_EMAIL environment variable is not configured')
    }

    const { data: emailData, error } = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: [EMAIL_CONFIG.ownerEmail],
      subject: `Nytt kontaktskjema fra ${data.name}`,
      react: OwnerNotificationEmail({
        name: data.name,
        email: data.email,
        message: data.message,
        reasons: data.reasons,
      }),
    });

    if (error) {
      logEmailEvent('error', 'Resend API returned error for owner notification', {
        emailId,
        error: error,
        ownerEmail: EMAIL_CONFIG.ownerEmail,
        submitterEmail: data.email,
      })
      throw new Error(`Failed to send owner notification email: ${JSON.stringify(error)}`);
    }

    logEmailEvent('info', 'Owner notification email sent successfully', {
      emailId,
      resendId: emailData?.id,
      ownerEmail: EMAIL_CONFIG.ownerEmail,
      submitterEmail: data.email,
    })

  } catch (error) {
    logEmailEvent('error', 'Owner notification email failed', {
      emailId,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      ownerEmail: EMAIL_CONFIG.ownerEmail,
      submitterEmail: data.email,
      errorType: error instanceof Error ? error.constructor.name : typeof error,
    })

    // Re-throw with enhanced error message for upstream handling
    throw new Error(
      error instanceof Error 
        ? `Owner notification email failed: ${error.message}`
        : 'Unknown error occurred while sending owner notification email'
    );
  }
}

/**
 * Send both user confirmation and owner notification emails
 * Handles partial failures gracefully - if user email succeeds but owner fails,
 * logs the error but doesn't throw to maintain good user experience
 * Enhanced with comprehensive logging and error tracking
 */
export async function sendBothEmails(data: ContactFormData): Promise<{
  userEmailSent: boolean;
  ownerEmailSent: boolean;
  errors: string[];
}> {
  const batchId = `batch_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
  
  logEmailEvent('info', 'Starting batch email sending process', {
    batchId,
    submitterEmail: data.email,
    submitterName: data.name,
  })

  const result = {
    userEmailSent: false,
    ownerEmailSent: false,
    errors: [] as string[],
  };

  const startTime = Date.now()

  // Send user confirmation email
  try {
    await sendUserConfirmation(data);
    result.userEmailSent = true;
    logEmailEvent('info', 'User confirmation email completed successfully', {
      batchId,
      submitterEmail: data.email,
    })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    result.errors.push(`User confirmation: ${errorMessage}`);
    
    logEmailEvent('error', 'User confirmation email failed in batch process', {
      batchId,
      error: errorMessage,
      submitterEmail: data.email,
      errorType: error instanceof Error ? error.constructor.name : typeof error,
    })
  }

  // Send owner notification email
  try {
    await sendOwnerNotification(data);
    result.ownerEmailSent = true;
    logEmailEvent('info', 'Owner notification email completed successfully', {
      batchId,
      submitterEmail: data.email,
    })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    result.errors.push(`Owner notification: ${errorMessage}`);
    
    logEmailEvent('error', 'Owner notification email failed in batch process', {
      batchId,
      error: errorMessage,
      submitterEmail: data.email,
      errorType: error instanceof Error ? error.constructor.name : typeof error,
    })
  }

  const endTime = Date.now()
  const duration = endTime - startTime

  // Log batch completion summary
  logEmailEvent('info', 'Batch email sending process completed', {
    batchId,
    userEmailSent: result.userEmailSent,
    ownerEmailSent: result.ownerEmailSent,
    errorCount: result.errors.length,
    duration: `${duration}ms`,
    submitterEmail: data.email,
    success: result.errors.length === 0,
    partialFailure: result.errors.length > 0 && (result.userEmailSent || result.ownerEmailSent),
  })

  // Log warning for partial failures
  if (result.errors.length > 0 && (result.userEmailSent || result.ownerEmailSent)) {
    logEmailEvent('warn', 'Partial failure in batch email sending', {
      batchId,
      errors: result.errors,
      userEmailSent: result.userEmailSent,
      ownerEmailSent: result.ownerEmailSent,
    })
  }

  return result;
}
/**
 * 
Health check function to verify email service configuration and connectivity
 * Useful for monitoring and debugging purposes
 */
export async function checkEmailServiceHealth(): Promise<{
  healthy: boolean;
  issues: string[];
  configuration: {
    hasApiKey: boolean;
    hasFromEmail: boolean;
    hasOwnerEmail: boolean;
  };
}> {
  const issues: string[] = []
  const configuration = {
    hasApiKey: !!process.env.RESEND_API_KEY,
    hasFromEmail: !!process.env.RESEND_FROM_EMAIL,
    hasOwnerEmail: !!process.env.RESEND_TO_CONTACT_EMAIL,
  }

  // Check configuration
  if (!configuration.hasApiKey) {
    issues.push('RESEND_API_KEY environment variable is missing')
  }
  
  if (!configuration.hasFromEmail) {
    issues.push('RESEND_FROM_EMAIL environment variable is missing')
  }
  
  if (!configuration.hasOwnerEmail) {
    issues.push('RESEND_TO_CONTACT_EMAIL environment variable is missing')
  }

  // Log health check
  logEmailEvent('info', 'Email service health check performed', {
    healthy: issues.length === 0,
    issueCount: issues.length,
    configuration,
  })

  if (issues.length > 0) {
    logEmailEvent('warn', 'Email service health check found issues', {
      issues,
      configuration,
    })
  }

  return {
    healthy: issues.length === 0,
    issues,
    configuration,
  }
}

/**
 * Get email service metrics for monitoring
 */
export async function getEmailServiceMetrics() {
  return {
    service: 'email-service',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    configuration: {
      provider: 'resend',
      hasApiKey: !!process.env.RESEND_API_KEY,
      hasFromEmail: !!process.env.RESEND_FROM_EMAIL,
      hasOwnerEmail: !!process.env.RESEND_TO_CONTACT_EMAIL,
    },
  }
}