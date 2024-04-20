import { loginUser } from "../models/users.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await loginUser(email, password);
        if (user.length) {
            res.status(200).json({ message: "Login successful" });
        } else {
            res.status(404).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}