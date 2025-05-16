import "dotenv/config";
import express, { Request, Response, Application } from "express";
import cors from "cors";

const app: Application = express();
const PORT: number = (process.env.PORT as unknown as number) || 8000;

app.use(cors());

app.get("/api/v1/status", (_req: Request, res: Response) => {
  res.status(200).json({ message: "API is running away D:" });
});

app.listen(PORT, () =>
  console.info(`Server is running away to http://localhost:${PORT}`)
);
