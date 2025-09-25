# Design Document

## Overview

This design outlines the migration of the existing contact form from API routes to Next.js server actions while maintaining all current functionality. The solution will leverage Next.js 15's server actions for improved server-side integration, better error handling, and enhanced user experience. The system will continue to use Resend for email delivery but with more robust error handling and logging.

## Architecture

### Previous Architecture (Migrated)
- Client-side form component with React Hook Form and Zod validation
- ~~API route at `/api/send` handling email sending~~ (Removed - replaced by server actions)
- Single email template component for user confirmations
- Basic error handling with try/catch blocks

### Current Architecture
- Client-side form component (unchanged validation and UI)
- Server action function for form processing and email sending
- Dual email templates: user confirmation and owner notification
- Enhanced error handling with detailed logging and user feedback
- Improved state management through server actions

### Data Flow
1. User submits form → Client-side validation (Zod schema)
2. Form data sent to server action → Server-side validation and processing
3. Server action sends two emails: user confirmation + owner notification
4. Server action returns success/error state → Client updates UI accordingly

## Components and Interfaces

### Server Action Interface
```typescript
// lib/actions/contact.ts
interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reasons: string[];
  website?: string; // honeypot
}

interface ActionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

async function submitContactForm(formData: FormData): Promise<ActionResult>
```

### Email Service Interface
```typescript
// lib/services/email.ts
interface EmailService {
  sendUserConfirmation(data: ContactFormData): Promise<void>;
  sendOwnerNotification(data: ContactFormData): Promise<void>;
}
```

### Enhanced Email Templates
- **User Confirmation Template**: Professional acknowledgment with form data copy
- **Owner Notification Template**: Detailed form submission for business processing

### Form Component Updates
- Replace fetch call with server action import and usage
- Enhanced error handling for server action responses
- Improved loading states and user feedback
- Maintain existing UI/UX patterns

## Data Models

### Form Data Structure (Existing - No Changes)
```typescript
const formSchema = z.object({
  name: z.string().min(1, "Fullt navn er påkrevd"),
  email: z.email("Vennligst skriv inn en e-postadresse"),
  message: z.string().min(1, "Du må fylle ut Melding"),
  reasons: z.array(z.string()).min(1, "Velg minst ett alternativ fra listen over kontaktårsaker"),
  website: z.string().max(0).optional(), // Honeypot field
})
```

### Server Action Response Model
```typescript
type ActionResult = {
  success: boolean;
  message: string;
  errors?: {
    [key: string]: string[];
  };
}
```

### Email Configuration Model
```typescript
interface EmailConfig {
  from: string;
  userTemplate: React.ComponentType<ContactFormData>;
  ownerTemplate: React.ComponentType<ContactFormData>;
  ownerEmail: string;
}
```

## Error Handling

### Client-Side Error Handling
- Form validation errors displayed inline using existing patterns
- Server action errors displayed as form-level messages
- Loading states prevent duplicate submissions
- Network errors handled gracefully with retry options

### Server-Side Error Handling
- Input validation using existing Zod schema
- Resend API error handling with specific error messages
- Partial failure handling (user email succeeds, owner email fails)
- Comprehensive logging for debugging and monitoring

### Error Categories
1. **Validation Errors**: Field-level errors returned to form
2. **Email Service Errors**: API failures, rate limits, configuration issues
3. **Server Errors**: Unexpected failures with fallback messaging
4. **Partial Failures**: Log warnings but don't fail user experience

## Testing Strategy

### Unit Testing
- Server action function testing with mock Resend API
- Email template rendering tests
- Form validation testing (existing tests maintained)
- Error handling scenario testing

### Integration Testing
- End-to-end form submission flow
- Email delivery verification in development
- Error state handling verification
- Server action integration with form component

### Manual Testing Scenarios
- Successful form submission with email delivery
- Form validation error handling
- Server error simulation and recovery
- Spam detection (honeypot) functionality
- Email template rendering in different email clients

### Performance Testing
- Server action response times
- Form submission under load
- Email sending performance with Resend API
- Client-side state management efficiency

## Implementation Considerations

### Environment Variables (Existing)
- `RESEND_API_KEY`: Resend service authentication
- `RESEND_FROM_EMAIL`: Sender email address
- `RESEND_TO_CONTACT_EMAIL`: Owner notification email

### Security Considerations
- Server-side validation prevents client-side bypass
- Honeypot field maintains spam protection
- Rate limiting considerations for server actions
- Email content sanitization

### Performance Optimizations
- Server actions provide better server-side performance
- Reduced client-side JavaScript bundle
- Efficient error handling without full page reloads
- Optimized email template rendering

### Backward Compatibility
- Maintain existing form UI and user experience
- Preserve all current validation rules and messages
- Keep existing email template styling and content
- Ensure no breaking changes to form behavior

### Migration Strategy (Completed)
1. ✅ Create server action alongside existing API route
2. ✅ Update form component to use server action
3. ✅ Test thoroughly in development environment
4. ✅ Deploy with feature flag capability
5. ✅ Remove old API route after successful migration