import { Router } from "express";
import { getAllClothes, getSingleWear, addClothes, updateClothesById } from "../controllers/clothes.js";

const clothesRouter = Router();

clothesRouter.get("/", getAllClothes);
clothesRouter.get("/:id", getSingleWear);
clothesRouter.post("/", addClothes);
clothesRouter.put("/:id", updateClothesById);

export default clothesRouter;
