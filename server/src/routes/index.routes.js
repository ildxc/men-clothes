import { Router } from "express";
import clothesRouter from "./clothes.routes.js";
import usersRouter from "./users.routes.js";
import authRouter from "./auth.routes.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

router.use("/clothes", clothesRouter);
router.use("/users", usersRouter);
router.use("/auth", authRouter);

export default router;