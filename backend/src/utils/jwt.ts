import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error("JWT_SECRET environment variable not found.")
}

export interface AuthTokenPayload {
    userId: string;
    role: string;
}

export const generateToken = async (payload: AuthTokenPayload, expiresIn = "1h"): Promise<string> => {
    const token = await jwt.sign(payload, JWT_SECRET, { expiresIn } as jwt.SignOptions);
    return token;
}

export const verifyToken = async (token: string) => {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
}