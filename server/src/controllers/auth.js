import { getUsers, loginUser } from "../models/users.js";
import { hashFunction } from "../utils/index.js";

export const login = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        console.log(hashFunction(password))
        console.log('67f04b4ed1ca702d57c2448199a2096845b2cc05596ba3e23f0ae70225a06103')
        const user = await loginUser(email, hashFunction(password));
        console.log(await getUsers())
        if (user) {
            res.status(200).json();
        } else {
            res.status(403).json({ message: "Invalid credentials", user });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};
