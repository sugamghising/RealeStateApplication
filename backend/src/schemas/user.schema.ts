import { email, z } from "zod";

export const updateUserSchema = z.object({
    username: z.string().min(3, 'Username character must be at least 3 characters.'),
    avatar: z.url('Invalid URL format').optional(),
})

export type UpdateUserInput = z.infer<typeof updateUserSchema>