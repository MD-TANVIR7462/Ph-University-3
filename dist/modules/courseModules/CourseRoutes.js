"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRoutes = void 0;
const express_1 = require("express");
const Course_controler_1 = require("./Course.controler");
const router = (0, express_1.Router)();
router.post('/', Course_controler_1.CourseControlers.CreatCourse);
exports.CourseRoutes = router;
