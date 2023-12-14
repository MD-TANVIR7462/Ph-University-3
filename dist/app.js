"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const CourseRoutes_1 = require("./modules/courseModules/CourseRoutes");
const CategoryRoutes_1 = require("./modules/Category/CategoryRoutes");
const ReviewRoutes_1 = require("./modules/ReviewModules/ReviewRoutes");
const zod_1 = require("zod");
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/courses", CourseRoutes_1.CourseRoutes);
app.use("/api/categories", CategoryRoutes_1.CategoryRoutes);
app.use("/api/reviews", ReviewRoutes_1.ReviewRoutes);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   let messsage: any;
// let finalMessage:any
//   if (err instanceof ZodError) {
//     let errorMessage: any;
//     console.log(err);
//     const FindErrorZOd = (err: any) => {
//       const Eror = err.issues.forEach(
//         (er: { message: any; errors: any; path: any }) => (
//          (
//             errorMessage = `${er.path[er.path.length - 1]} is ${er.message}.`
//           ),
//           (messsage = "Validation Error"),
//           finalMessage=`${errorMessage}.${finalMessage}`
//         )
//       );
//     };
//     FindErrorZOd(err);
//   }
//
app.use((err, req, res, next) => {
    let message;
    let finalMessage;
    if (err instanceof zod_1.ZodError) {
        let errorMessage;
        console.log(err);
        const findErrorZod = (err) => {
            const errorArray = err.issues.map((er) => {
                return `${er.path[er.path.length - 1]} is ${er.message}.`;
            });
            if (errorArray.length > 0) {
                // Execute the following block only if there are validation errors
                errorMessage = errorArray.join(' '); // Join error messages into a single string
                message = "Validation Error";
                finalMessage = `${errorMessage}.`;
            }
        };
        findErrorZod(err);
    }
    res.status(500).json({
        success: false,
        message: message,
        errorMessage: finalMessage,
        errorDetails: err,
        stack: err.stack,
    });
});
exports.default = app;
