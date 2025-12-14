import { prisma } from "../lib/prisma"
import { LoginInput, RegisterInput } from "../schemas/auth.schema";
import { comparePassword, hashPassword } from "../utils/hash";
import { generateToken } from "../utils/jwt";

export const registerUser = async (data: RegisterInput) => {
    const { username, email, password } = data;
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
    return {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
    };
}


export const loginUser = async (data: LoginInput) => {
    const { email, password } = data;
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

    const token = await generateToken({ userId: user.id.toString(), role: user.role });
    return {
        token,
        user: {
            id: user.id,
            name: user.username,
            email: user.email,
            role: user.role,
        }
    }


}