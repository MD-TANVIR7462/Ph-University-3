import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { CourseRoutes } from "./modules/courseModules/CourseRoutes";
import { CategoryRoutes } from "./modules/Category/CategoryRoutes";
import { ReviewRoutes } from "./modules/ReviewModules/ReviewRoutes";
import { ZodError, any } from "zod";
const app = express();

//parsers
app.use(express.json());

app.use(cors());

app.use("/api/courses", CourseRoutes);
app.use("/api/categories", CategoryRoutes);
app.use("/api/reviews", ReviewRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  let messsage: any;
let finalMessage:any

  if (err instanceof ZodError) {
  
    let errorMessage: any;
    console.log(err);
    const FindErrorZOd = (err: any) => {
   
      const Eror = err.issues.map(
        (er: { message: any; errors: any; path: any }) => (
        
         (
            errorMessage = `${er.path[er.path.length - 1]} is ${er.message}.`
          ),
          (messsage = "Validation Error"),
          finalMessage=`${errorMessage}.${finalMessage}`
        )
      );
    };
    FindErrorZOd(err);
  }

  //

  res.status(500).json({
    success: false,
    message: messsage,
    errorMessage: finalMessage,
    errorDetails: err,
    stack: err.stack,
  });
});
export default app;
