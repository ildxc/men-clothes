import { getUsers, loginUser } from "../models/users.js";
import { hashFunction } from "../utils/index.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await loginUser(email, hashFunction(password));
        if (user) {
            res.status(200).json({
                message: "User logged in successfully",
                user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                },
            });
        } else {
            res.status(403).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};
