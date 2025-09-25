import z from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Fullt navn er påkrevd"),
  email: z.email("Vennligst skriv inn en e-postadresse"),
  message: z.string().min(1, "Du må fylle ut Melding"),
  reasons: z.array(z.string()).min(1, "Velg minst ett alternativ fra listen over kontaktårsaker"),
  website: z.string().max(0).optional(), // Honeypot field
})