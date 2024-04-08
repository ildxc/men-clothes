import mongoose from "mongoose";

const clothesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    sizes: { type: Array, required: true },
    colors: { type: Array, required: true },
});

export const Clothes = mongoose.model("Clothes", clothesSchema);
export const getClothes = () =>  Clothes.find();
export const getClothesById = (id) => Clothes.findById(id);
export const createClothes = (clothes) => Clothes.create(clothes);
export const updateClothes = (id, clothes) => Clothes.findByIdAndUpdate(id, clothes, { new: true });
