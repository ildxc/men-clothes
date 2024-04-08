import dotenv from "dotenv";
dotenv.config();
import router from "./routes/index.routes.js";
import express from "express";
const PORT = process.env.PORT || 80;

const app = express();
app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
