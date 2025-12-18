import { z } from "zod";

export const postSchema = z.object({

})

export type postType = z.infer<typeof postSchema>