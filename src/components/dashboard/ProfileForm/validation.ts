import { z } from "zod"

export const profileSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    family: z.string().min(2, "Family name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    mobile: z
        .string()
        .regex(/^09\d{9}$/, "Invalid mobile number (e.g., 09123456789)"),
    dateOfBirth: z.date(
        "Date of birth is required",
    ),
    favorites: z
        .array(z.string())
        .min(1, "Please select at least one favorite"),
    bio: z.string().min(10, "Bio must be at least 10 characters"),
})

export type ProfileFormValues = z.infer<typeof profileSchema>
