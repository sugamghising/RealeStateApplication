import express from "express";
import { requireAuth } from "../middleware/auth.middleware";
import { deleteUser, getUser, getUsers, updateUser } from "../controller/user.controller";
import upload from "../middleware/upload.middleware";

const userRouter = express.Router();

userRouter.get('/', requireAuth, getUsers);
userRouter.get('/:userId', requireAuth, getUser);
userRouter.put('/:userId', requireAuth, upload.single('avatar'), updateUser);
userRouter.delete('/:userId', requireAuth, deleteUser);


export default userRouter;