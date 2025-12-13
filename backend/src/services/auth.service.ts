import { prisma } from "../lib/prisma"
import { comparePassword, hashPassword } from "../utils/hash";
import { generateToken } from "../utils/jwt";

export const loginUser = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: { email: email }
    });

    if (!user) {
        throw new Error("Invalid credentials.");
    }

    const isPasswordCorrect = await comparePassword(password, user.password);

    if (!isPasswordCorrect) {
        throw new Error("Invalid Credentials.");
    }

    const token = await generateToken({ userId: user.id, role: user.role });
    return {
        token,
        user: {
            userId: user.id,
            name: user.username,
            email: user.email,
            role: user.role,
        }
    }


}


export const registerUser = async (email: string, username: string, password: string) => {
    const existingUser = await prisma.user.findFirst({
        where: { OR: [{ email }, { username }] }
    });

    if (existingUser) {
        throw new Error("User already Exists.");
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
        data: { username, email, password: hashedPassword }
    });
    return user;
}