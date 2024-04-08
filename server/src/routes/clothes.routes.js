import { Router } from "express";
import { getAllClothes } from "../controllers/clothes.js";

const clothesRouter = Router();

clothesRouter.get("/", getAllClothes);

export default clothesRouter;
