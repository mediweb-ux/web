"use server";

import z from "zod";
import { formSchema } from "./schemas";
import { sendBothEmails } from "./services/email";

export const send = async (data: z.infer<typeof formSchema>) => {
  return await sendBothEmails(data);
}