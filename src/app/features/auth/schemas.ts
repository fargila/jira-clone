import { z } from "zod"

export const loginSchema = z.object({
    email: z.email().trim().min(1, "This field is required!"),
    password: z.string().min(1, "This field is required!"),
})