import { property, z } from "zod";

export const postSchema = z.object({
    title: z.string('Title is required.'),
    price: z.number().int().nonnegative(),
    address: z.string().min(1),
    city: z.string().min(1),
    bedroom: z.number().int().nonnegative(),
    bathroom: z.number().int().nonnegative(),
    latitude: z.string().min(1),
    longitude: z.string().min(1),
    type: z.enum(['buy', 'rent']),
    property: z.enum(['apartment', 'house', 'condo', 'land'])
})

export type postType = z.infer<typeof postSchema>