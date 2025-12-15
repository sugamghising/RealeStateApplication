import { prisma } from "../lib/prisma"
import { UpdateUserInput } from "../schemas/user.schema";

export const getUsers = async () => {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        console.error("Error fetching users.", error);
    }
}

export const getUserById = async (userId: string) => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
    });
    if (!user) {
        throw new Error("User not found.");
    }
    return user;
}

export const updateUser = async (userData: UpdateUserInput) => {

}