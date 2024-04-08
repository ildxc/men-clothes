import { Router } from "express";
import clothesRouter from "./clothes.routes.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

router.use("/clothes", clothesRouter);

export default router;