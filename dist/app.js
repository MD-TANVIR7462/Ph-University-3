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
const Course_controler_1 = require("./modules/courseModules/Course.controler");
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/courses", CourseRoutes_1.CourseRoutes);
app.post("/api/course", Course_controler_1.CourseControlers.CreatCourse);
app.use("/api/categories", CategoryRoutes_1.CategoryRoutes);
app.use("/api/reviews", ReviewRoutes_1.ReviewRoutes);
app.get("/api/course/best", Course_controler_1.CourseControlers.GetBest);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use((err, req, res, next) => {
    let message;
    let finalMessage;
    // zod error handelar
    if (err instanceof zod_1.ZodError) {
        let errorMessage;
        const findErrorZod = (err) => {
            const errorArray = err.issues.map((er) => {
                return `${er.path[er.path.length - 1]} is ${er.message}.`;
            });
            if (errorArray.length > 0) {
                errorMessage = errorArray.join(" ");
                message = "Validation Error";
                finalMessage = errorMessage;
            }
        };
        findErrorZod(err);
    }
    //  Cast error handelar//
    else if ((err === null || err === void 0 ? void 0 : err.name) === "CastError") {
        (message = `Cast Error`), (finalMessage = `${err.value}is not a valid ID!`);
    }
    //Duplocate errror
    else if ((err === null || err === void 0 ? void 0 : err.code) === 11000) {
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
exports.default = app;
