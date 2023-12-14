import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { CourseRoutes } from "./modules/courseModules/CourseRoutes";
import { CategoryRoutes } from "./modules/Category/CategoryRoutes";
import { ReviewRoutes } from "./modules/ReviewModules/ReviewRoutes";
import { ZodError, any } from "zod";
import mongoose from "mongoose";
import { CourseControlers } from "./modules/courseModules/Course.controler";
const app = express();

//parsers
app.use(express.json());

app.use(cors());

app.use("/api/courses", CourseRoutes);
app.post("/api/course",CourseControlers.CreatCourse);
app.use("/api/categories", CategoryRoutes);
app.use("/api/reviews", ReviewRoutes);
app.get("/api/course/best",CourseControlers.GetBest)


app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  let message: any;
  let finalMessage: any;

  // zod error handelar
  if (err instanceof ZodError) {
    let errorMessage: any;

    const findErrorZod = (err: any) => {
      const errorArray = err.issues.map(
        (er: { message: any; errors: any; path: any }) => {
          return `${er.path[er.path.length - 1]} is ${er.message}.`;
        }
      );

      if (errorArray.length > 0) {
        errorMessage = errorArray.join(" ");
        message = "Validation Error";
        finalMessage = errorMessage;
      }
    };
    findErrorZod(err);
  }

  //  Cast error handelar//
  else if (err?.name === "CastError") {
    (message = `Cast Error`), (finalMessage = `${err.value}is not a valid ID!`);
  }
  //Duplocate errror
  else if (err?.code === 11000) {
    (message = `Duplicate Entry`),
      (finalMessage = `${err.keyValue.title}  is already exists`);
  }

  res.status(500).json({
    success: false,
    message: message,
    errorMessage: finalMessage,
    errorDetails: err,
    stack: err.stack,
  });
});
export default app;
