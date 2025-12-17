import { prisma } from "../lib/prisma"
import { UpdateUserInput } from "../schemas/user.schema";
import { Prisma } from "../generated/prisma/client";

export const getUsers = async () => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
                avatar: true
            }
        });
        return users;
    } catch (error) {
        console.error("Error fetching users.", error);
    }
}

export const getUserById = async (userId: string) => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            username: true,
            email: true,
            role: true,
            avatar: true
        }
    });
    if (!user) {
        throw new Error("User not found.");
    }
    return user;
}

export const updateUser = async (userId: string, userData: UpdateUserInput) => {
    const updateData: Prisma.UserUpdateInput = {};

    if (userData.username !== undefined) {
        updateData.username = userData.username;
    }
    if (userData.avatar !== undefined) {
        updateData.avatar = userData.avatar;
    }
    return prisma.user.update({
        where: { id: userId },
        data: updateData,
        select: {
            id: true,
            username: true,
            email: true,
            role: true,
            avatar: true
        }
    })
}


export const deleteUser = async (userId: string) => {
    return prisma.user.delete({
        where: { id: userId }
    });
}