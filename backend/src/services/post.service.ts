import { prisma } from "../lib/prisma"
import { postType } from "../schemas/post.schema";


export const getPosts = async () => {
    try {
        const posts = await prisma.post.findMany({
            select: {
                id: true,
                title: true,
                price: true,
                address: true,
                city: true,
                bedroom: true,
                bathroom: true,
                longitude: true,
                latitude: true
            }
        });
        return posts;
    } catch (error) {
        console.error("Error fetching posts.", error);
    }
}

export const getPost = async (postId: string) => {
    try {
        const post = await prisma.post.findUnique({
            where: { id: postId },
        })
        if (!post) {
            throw new Error("User not found.")
        }

        return post;

    } catch (error) {
        console.error("Error fetching posts.", error);
    }
}


export const addPost = async (postData: postType) => {

}