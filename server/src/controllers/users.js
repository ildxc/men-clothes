import { getUsers, getUserById, createUser, updateUser } from "../models/users.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getSingleUser = async(req, res) => {
    try{
        const { id } = req.body      
        const user = await getUserById(id)
        res.status(200).json(user)
    } catch(e){
        res.status(404).json({ message: error.message });
    }
}

export const addUser = async (req, res) => {
    try {
        const user = req.body;
        const newUser = await createUser(user);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = req.body;
        const updatedUser = await updateUser(id, user);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}