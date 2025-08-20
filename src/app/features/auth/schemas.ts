import { z } from "zod"

export const loginSchema = z.object({
    email: z.email().trim().min(1, "This field is required!"),
    password: z.string().min(1, "This field is required!"),
})

export const registerSchema = z.object({
    name: z.string().min(1, "This field is required!"),
    email: z.email().trim().min(1, "This field is required!"),
    password: z.string().min(8, "The password requires at least 8 characters!"),
})
