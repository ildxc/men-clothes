import { getAllUsers, updateUserById, getSingleUser, addUser } from "../controllers/users.js";
import { Router } from "express";

const usersRouter = Router();

usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", getSingleUser);
usersRouter.post("/", addUser);
usersRouter.put("/:id", updateUserById);

export default usersRouter;