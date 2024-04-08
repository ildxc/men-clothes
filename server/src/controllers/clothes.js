import { getClothes } from "../models/clothes.js";

export const getAllClothes = async (req, res) => {
    try {
        const clothes = await getClothes();
        res.status(200).json(clothes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
