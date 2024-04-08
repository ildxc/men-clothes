import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./services/db.js";
import router from "./routes/index.routes.js";
const PORT = process.env.PORT || 80;

const app = express();
app.use('/api', router)
app.use(express.urlencoded({ extended: false }))

connectDB(process.env.MONGO_URI);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});