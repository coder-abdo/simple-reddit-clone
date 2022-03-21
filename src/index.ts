import { AppDataSource } from "./data-source";
import express, { json, Request, Response, urlencoded } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { config } from "dotenv";
import { errorMiddleware } from "./middlewares/error.middleware";
import postRoutes from "./routes/routes";
config();
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(postRoutes);
app.use(errorMiddleware);
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "ooops!! you are lost" });
});
app.listen(process.env.PORT, async () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
  try {
    await AppDataSource.initialize();
    console.log("connected to the database");
  } catch (error) {
    throw new Error(`${(error as Error).message}`);
  }
});
