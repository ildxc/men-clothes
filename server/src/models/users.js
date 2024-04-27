import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
});

export const User = mongoose.model("Users", userSchema);
export const getUsers = () =>  User.find();
export const getUserById = (id) => User.findById(id);
export const createUser = (user) => User.create(user);
export const updateUser = (id, user) => User.findByIdAndUpdate(id, user, { new: true })
export const loginUser = async (email, password) => User.findOne({email: email, password: password})