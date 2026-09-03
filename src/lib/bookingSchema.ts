import { z } from "zod";

export const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(60, "Name is too long")
    .regex(/^[A-Za-z\s.'-]+$/, "Name contains invalid characters"),
  email: z
    .string()
    .trim()
    .regex(
      /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
      "Please enter a valid Gmail address",
    ),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  mode: z.string(),
  goal: z.string().optional().default(""),
  practices: z.array(z.string()).optional(),
  notes:
    z.string()
    .trim()
    .max(
    1000,
    "Notes too long"
 )
 .optional(),
});

export type BookingInput = z.infer<typeof bookingSchema>;
export type BookingValidationErrors = Partial<
  Record<keyof BookingInput, string[]>
>;

export function getBookingValidationErrors(error: z.ZodError<BookingInput>) {
  return error.flatten().fieldErrors as BookingValidationErrors;
}
