import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(80, "Use 80 characters or fewer."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(120, "Use 120 characters or fewer."),
  phone: z
    .string()
    .trim()
    .max(30, "Use 30 characters or fewer.")
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .trim()
    .min(3, "Enter a subject.")
    .max(120, "Use 120 characters or fewer."),
  message: z
    .string()
    .trim()
    .min(10, "Write at least 10 characters.")
    .max(2000, "Use 2,000 characters or fewer."),
  companyWebsite: z.string().optional().or(z.literal("")),
});

export type ContactValues = z.infer<typeof contactSchema>;
