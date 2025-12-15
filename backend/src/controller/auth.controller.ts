import { Request, Response } from "express"
import { loginSchema, registerSchema } from "../schemas/auth.schema"
import * as authServices from "../services/auth.service"

export const registerUser = async (req: Request, res: Response) => {
    const parsed = registerSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: "Invalid register data." })
    }

    try {
        const user = await authServices.registerUser(parsed.data);
        res.status(201).json({
            message: "Registration successful",
            user
        })
    } catch (error) {
        console.log("Error in registering User", error);
        res.status(500).json({
            message: "Could not register",
        })
    }
}

export const loginUser = async (req: Request, res: Response) => {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: "Invalid login data." })
    }

    try {
        const result = await authServices.loginUser(parsed.data);
        return res.status(201).json({
            message: "User LoggedIn Successful.",
            token: result.token,
            user: result.user
        })

    } catch (error) {
        console.log("Error in Logging User", error);
        res.status(500).json({
            message: "Could not log in the user.",
        })
    }
}

export const logoutUser = async (req: Request, res: Response) => {
}