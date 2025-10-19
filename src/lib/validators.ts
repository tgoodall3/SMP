import { z } from "zod";

const phoneRegex = /^\+?[\d\s().-]{7,}$/;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email address."),
  phone: z
    .string()
    .optional()
    .refine((value) => !value || phoneRegex.test(value), { message: "Enter a valid phone number." }),
  service: z.string().optional(),
  message: z.string().min(10, "Tell us a little more about what you need."),
  _company: z.string().optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export const requestServiceSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(10, "Enter a valid phone number."),
  address: z.string().min(4, "Please provide the service address."),
  city: z.string().min(2, "Let us know your city."),
  service: z.string().min(2, "Select a service type."),
  urgency: z.enum(["emergency", "soon", "planning"]),
  details: z.string().min(10, "Tell us what's going on."),
  preferredDate: z.string().optional(),
  preferredTimeWindow: z.enum(["morning", "afternoon", "evening", "any"]),
  contactPreference: z.enum(["phone", "email", "either"]),
  _company: z.string().optional(),
});

export type RequestServiceInput = z.infer<typeof requestServiceSchema>;

