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
app.use((err, req, res, next) => {
    let messsage;
    let errorMessage;
    if (err instanceof zod_1.ZodError) {
        const FindErrorZOd = (err) => {
            const Eror = err.issues.map((er) => ((messsage = "Validation Error"),
                (errorMessage = er.message)));
        };
        FindErrorZOd(err);
    }
    console.log(err);
    res.status(500).json({
        success: false,
        message: messsage,
        errorMessage: errorMessage,
        errorDetails: err,
        stack: err.stack,
    });
});
exports.default = app;
