"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Loader2, Send } from "lucide-react"
import { formSchema } from "@/lib/schemas"
import { submitContactForm, type ActionResult } from "@/lib/actions/contact"

const contactReasons = ["Webutvikling", "Legetjenester", "Kursvirksomhet", "Annet"]

type FormData = z.infer<typeof formSchema>

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [serverErrors, setServerErrors] = useState<Record<string, string[]> | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      reasons: [],
    },
  })

  const handleReasonToggle = (reason: string) => {
    const currentReasons = getValues("reasons") || []
    const newReasons = currentReasons.includes(reason)
      ? currentReasons.filter((r) => r !== reason)
      : [...currentReasons, reason]
    setValue("reasons", newReasons)
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setServerError(null)
    setServerErrors(null)

    try {
      // Create FormData object for server action
      const formData = new FormData()
      formData.append("name", data.name)
      formData.append("email", data.email)
      formData.append("message", data.message)
      
      // Add each reason as a separate entry
      data.reasons.forEach(reason => {
        formData.append("reasons", reason)
      })
      
      // Add honeypot field
      formData.append("website", data.website || "")

      // Call server action
      const result: ActionResult = await submitContactForm(formData)

      if (result.success) {
        setIsSubmitted(true)
      } else {
        // Handle server action errors
        if (result.errors) {
          setServerErrors(result.errors)
        } else {
          setServerError(result.message)
        }
      }
    } catch (error) {
      console.error("Feil i skjema:", error)
      setServerError("Det oppstod en uventet feil. Vennligst prøv igjen senere.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRetry = () => {
    setServerError(null)
    setServerErrors(null)
    // Trigger form submission again with current values
    handleSubmit(onSubmit)()
  }

  if (isSubmitted) {
    return (
      <Card className="shadow-lg border-0 bg-card animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <CheckCircle className="h-16 w-16 text-accent animate-in zoom-in-50 duration-700 delay-200" />
              <div className="absolute inset-0 h-16 w-16 rounded-full bg-accent/20 animate-ping" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2 animate-in slide-in-from-bottom-2 duration-500 delay-300">
            Takk!
          </h3>
          <p className="text-muted-foreground mb-6 animate-in slide-in-from-bottom-2 duration-500 delay-400">
            Ditt skjema er innsendt, og vi vil ta kontakt med deg s&aring; snart vi har mulighet!
          </p>
          <div className="space-y-3 animate-in slide-in-from-bottom-2 duration-500 delay-500">
            <div className="p-3 bg-accent/10 border border-accent/20 rounded-lg">
              <p className="text-sm text-accent-foreground">
                📧 Du vil motta en bekreftelse på e-post om kort tid
              </p>
            </div>
            <Button
              onClick={() => {
                setIsSubmitted(false)
                setServerError(null)
                setServerErrors(null)
                reset()
              }}
              variant="outline"
              className="transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
            >
              Send flere meldinger
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const selectedReasons = watch("reasons") ?? []

  return (
    <Card className={`shadow-lg border-0 bg-card transition-all duration-300 ${isSubmitting ? 'opacity-95' : ''}`}>
      <CardHeader className="pb-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-card-foreground mb-2">Kontaktskjema</h2>
          <p className="text-muted-foreground">Fyll ut skjemaet nedenfor for &aring; kontakte oss. Alle feltene er obligatoriske. Vi svarer s&aring; raskt vi kan!</p>
          {isSubmitting && (
            <div className="mt-3 w-full bg-muted rounded-full h-1 overflow-hidden">
              <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '70%' }} />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-8 pt-0">
        {/* Enhanced Server Error Display */}
        {serverError && (
          <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-3 animate-in slide-in-from-top-2 duration-300">
            <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium text-destructive mb-1">Feil ved innsending</p>
              <p className="text-sm text-destructive/80 mb-3">{serverError}</p>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleRetry}
                  disabled={isSubmitting}
                  className="h-auto px-2 py-1 text-xs text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  Prøv igjen
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setServerError(null)}
                  className="h-auto px-2 py-1 text-xs text-destructive/70 hover:text-destructive hover:bg-transparent"
                >
                  Lukk melding
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Loading State Overlay */}
        {isSubmitting && (
          <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg flex items-center gap-3 animate-in slide-in-from-top-2 duration-300">
            <Loader2 className="h-5 w-5 text-primary animate-spin flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-primary mb-1">Sender skjema</p>
              <p className="text-sm text-primary/80">Vennligst vent mens vi behandler din henvendelse...</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Navn */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-card-foreground">
              Fullt navn *
            </label>
            <input
              id="name"
              type="text"
              placeholder="Skriv inn for- og etternavn"
              disabled={isSubmitting}
              className={`flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-xs transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${
                errors.name || serverErrors?.name
                  ? "border-destructive bg-destructive/5 focus-visible:ring-destructive"
                  : "border-border bg-input focus-visible:ring-ring"
              }`}
              {...register("name")}
            />
            {(errors.name || serverErrors?.name) && (
              <div className="animate-in slide-in-from-top-1 duration-200">
                {errors.name && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.name.message}
                  </p>
                )}
                {serverErrors?.name && serverErrors.name.map((error, index) => (
                  <p key={index} className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {error}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* E-post */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-card-foreground">
              E-postadresse *
            </label>
            <input
              id="email"
              type="email"
              placeholder="E-postadresse til kontaktperson"
              disabled={isSubmitting}
              className={`flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-xs transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${
                errors.email || serverErrors?.email
                  ? "border-destructive bg-destructive/5 focus-visible:ring-destructive"
                  : "border-border bg-input focus-visible:ring-ring"
              }`}
              {...register("email")}
            />
            {(errors.email || serverErrors?.email) && (
              <div className="animate-in slide-in-from-top-1 duration-200">
                {errors.email && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.email.message}
                  </p>
                )}
                {serverErrors?.email && serverErrors.email.map((error, index) => (
                  <p key={index} className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {error}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Kontaktårsak */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-card-foreground">
              Hva kan vi hjelpe deg med? (Mulig &aring; velge flere) *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactReasons.map((reason) => (
                <button
                  key={reason}
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => handleReasonToggle(reason)}
                  className={`p-3 rounded-lg border text-sm font-medium transition-all duration-200 text-left disabled:cursor-not-allowed disabled:opacity-50 ${
                    selectedReasons.includes(reason)
                      ? "bg-accent text-accent-foreground border-accent shadow-sm"
                      : "bg-muted text-muted-foreground border-border hover:border-accent hover:bg-accent/10 disabled:hover:border-border disabled:hover:bg-muted"
                  } ${
                    errors.reasons || serverErrors?.reasons
                      ? "border-destructive/50"
                      : ""
                  }`}
                >
                  {reason}
                </button>
              ))}
              {(errors.reasons || serverErrors?.reasons) && (
                <div className="col-span-full animate-in slide-in-from-top-1 duration-200">
                  {errors.reasons && (
                    <p className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.reasons.message}
                    </p>
                  )}
                  {serverErrors?.reasons && serverErrors.reasons.map((error, index) => (
                    <p key={index} className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {error}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {selectedReasons.length > 0 && (
              <div className="mt-4 p-3 bg-accent/20 border border-accent/30 rounded-lg animate-in slide-in-from-top-2 duration-300">
                <p className="text-sm font-medium text-card-foreground mb-2">Valgte omr&aring;der:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedReasons.map((reason, index) => (
                    <span
                      key={reason}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-md animate-in fade-in-0 slide-in-from-left-2 duration-200"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {reason}
                      <button
                        type="button"
                        disabled={isSubmitting}
                        onClick={() => handleReasonToggle(reason)}
                        className="ml-1 hover:bg-accent-foreground/20 rounded-full p-0.5 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                        aria-label={`Remove ${reason}`}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Melding */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-card-foreground">
              Melding *
            </label>
            <textarea
              id="message"
              placeholder="Fortell oss om ditt prosjekt eller ditt spørsmål..."
              rows={5}
              disabled={isSubmitting}
              className={`flex min-h-[60px] w-full rounded-md border px-3 py-2 text-base shadow-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none transition-all duration-200 ${
                errors.message || serverErrors?.message
                  ? "border-destructive bg-destructive/5 focus-visible:ring-destructive"
                  : "border-border bg-input focus-visible:ring-ring"
              }`}
              {...register("message")}
            />
            {(errors.message || serverErrors?.message) && (
              <div className="animate-in slide-in-from-top-1 duration-200">
                {errors.message && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.message.message}
                  </p>
                )}
                {serverErrors?.message && serverErrors.message.map((error, index) => (
                  <p key={index} className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {error}
                  </p>
                ))}
              </div>
            )}
          </div>

        <input
            type="text"
            name="website"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
        />

          {/* Enhanced Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 shadow-sm transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <div className="flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Sender...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Send inn</span>
                </>
              )}
            </div>
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            N&aring;r du sender inn skjemaet, betyr det ogs&aring; at du har lest og godtatt personvernerkl&aelig;ringen og brukervilk&aring;rene v&aring;re.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}