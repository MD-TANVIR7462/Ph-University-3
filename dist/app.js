"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const CourseRoutes_1 = require("./modules/courseModules/CourseRoutes");
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
app.use((0, cors_1.default)());
app.use('/api/course', CourseRoutes_1.CourseRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use((err, req, res, next) => {
    const messsage = err.message || "Something went wrong";
    res.status(500).json({
        success: false,
        message: messsage,
        error: err
    });
});
exports.default = app;
