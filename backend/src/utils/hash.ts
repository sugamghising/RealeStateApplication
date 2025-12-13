import bcrypt from "bcrypt";

const saltRounds = 10;

export const hashPassword = async (password: string): Promise<string> => {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
}

export const comparePassword = async (password: string, hashPassword: string): Promise<Boolean> => {
    const isPasswordCorrect = await bcrypt.compare(password, hashPassword);
    return isPasswordCorrect;
}