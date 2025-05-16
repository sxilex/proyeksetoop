import "dotenv/config";
import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 6000;
app.use(cors());
app.get("api/v1/status", (req, res) => {
    res.status(200).json({ message: "API is running away D:" });
});
app.listen(PORT, () => console.info(`Server is running away to http://localhost:${PORT}`));
