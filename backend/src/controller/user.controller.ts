import { Request, Response } from "express";
import * as userServices from "../services/user.service"
import { updateUserSchema } from "../schemas/user.schema"

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await userServices.getUsers();
        res.status(200).json({
            message: "Users fetched successfully",
            users
        })
    } catch (error) {
        console.log("Error fetching the users.");
        res.status(500).json({
            message: "Could not fetch the users.",
        })
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        if (!userId) {
            return res.status(400).json({ error: "User ID is required" });
        }
        const user = await userServices.getUserById(userId);
        res.status(200).json({
            message: "User fetched successfully",
            user
        })

    } catch (error) {
        console.log("Error fetching the user.");
        res.status(500).json({
            message: "Could not fetch the user.",
        })
    }
}

export const updateUser = async (req: Request, res: Response) => {

    const { userId } = req.params;
    if (!userId) {
        return res.status(400).json({ error: "User Id is required." });
    }

    if (req.user?.userId !== userId && req.user?.role !== 'ADMIN') {
        return res.status(403).json({ error: "Forbidden: You can only update your own profile" });
    }

    const parsed = updateUserSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: "Invalid update user data." })
    }
    try {
        const updatedUser = userServices.updateUser(userId, parsed.data);
        res.status(200).json({
            message: "User updated successfully",
            user: updatedUser
        });
    } catch (error) {
        res.status(400).json({
            message: "Could not update user",
            error: error instanceof Error ? error.message : "Internal server error"
        });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { userId } = req.params;
    if (!userId) {
        return res.status(400).json({ error: "User Id is required." });
    }

    // Only allow users to delete their own profile unless they're admin
    if (req.user?.userId !== userId && req.user?.role !== 'ADMIN') {
        return res.status(403).json({ error: "Forbidden: You can only delete your own profile" });
    }

    try {
        await userServices.deleteUser(userId);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.log("Error in deleting the user.");
        res.status(400).json({
            message: "Could not delete user",
            error: error instanceof Error ? error.message : "Internal server error"
        });
    }
}