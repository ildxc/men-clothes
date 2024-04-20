import { getClothes, getClothesById, createClothes, updateClothes, getClothesByType } from "../models/clothes.js";

export const getAllClothes = async (req, res) => {
    try {
        const { type } = req.query;
        if (type) {
            const clothes = await getClothesByType(type);
            return res.status(200).json(clothes);
        }
        const clothes = await getClothes();
        res.status(200).json(clothes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getSingleWear = async(req, res) => {
    try{
        const { id } = req.params      
        const wear = await getClothesById(id)
        console.log(wear)
        res.status(200).json(wear)
    } catch(error){
        res.status(404).json({ message: error.message });
    }
}

export const addClothes = async (req, res) => {
    try {
        const clothes = req.body;
        const newClothes = await createClothes(clothes);
        res.status(201).json(newClothes);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateClothesById = async (req, res) => {
    try {
        const { id } = req.params;
        const clothes = req.body;
        const updatedClothes = await updateClothes(id, clothes);
        res.status(200).json(updatedClothes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}