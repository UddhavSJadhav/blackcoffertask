import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
dotenv.config({ path: "../../../.env.local", override: true });

//utils
import { connectToDB } from "./utils/mongodb.js";

//routes
import DataRoutes from "./dataRoutes.js";

const port: any = process.env.PORT || 8000;
const app: Application = express();

dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.on("finish", function (this: Response) {
    let code = this.statusCode;
    console.log(`${req.method} ${req.path} ${code}`);
  });
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Server is running!" });
});

app.use("/api/v1/data", DataRoutes);

export const startServer = () => {
  try {
    connectToDB();
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
