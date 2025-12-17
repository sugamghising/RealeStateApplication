import express from "express";
import { requireAuth } from "../middleware/auth.middleware";
import { deleteUser, getUser, getUsers, updateUser } from "../controller/user.controller";

const userRouter = express.Router();

userRouter.get('/', requireAuth, getUsers);
userRouter.get('/:userId', requireAuth, getUser);
userRouter.put('/:userId', requireAuth, updateUser);
userRouter.delete('/:userId', requireAuth, deleteUser);


export default userRouter;