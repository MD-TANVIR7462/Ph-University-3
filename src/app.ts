import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { CourseRoutes } from "./modules/courseModules/CourseRoutes";
import { CategoryRoutes } from "./modules/Category/CategoryRoutes";
import { ReviewRoutes } from "./modules/ReviewModules/ReviewRoutes";
const app = express();

//parsers
app.use(express.json());

app.use(cors());

app.use("/api/course", CourseRoutes);
app.use("/api/categories", CategoryRoutes);
app.use("/api/reviews", ReviewRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const messsage = err.message || "Something went wrong";

  res.status(500).json({
    success: false,
    message: messsage,
    error: err,
  });
});
export default app;
