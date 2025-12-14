import { z } from "zod";

export const registerSchema = z.object({
    username: z.string().min(3, 'username must be atleast 3 character.'),
    email: z.email('Invalid email format'),
    password: z.string().min(8, 'Password must be at least 8 character.')
});

export const loginSchema = z.object({
    email: z.email('Invalid email format'),
    password: z.string().min(8, 'Password must be at least 8 character.')
});

export type RegisterInput = z.infer<typeof registerSchema>
export type LoginInput = z.infer<typeof loginSchema>