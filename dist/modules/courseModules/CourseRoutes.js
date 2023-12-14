"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRoutes = void 0;
const express_1 = require("express");
const Course_controler_1 = require("./Course.controler");
const SIngleCourseWithReviews_1 = require("../../CombineControlers/SIngleCourseWithReviews");
const router = (0, express_1.Router)();
router.get('/', Course_controler_1.CourseControlers.GetallCourse);
router.get('/:courseId', Course_controler_1.CourseControlers.GetSingleCourse);
router.get('/:courseId/reviews', SIngleCourseWithReviews_1.CombineCourseReview.GetSingleCourseWithReviews);
router.delete('/:courseId', Course_controler_1.CourseControlers.deleteCourse);
router.put('/:courseId', Course_controler_1.CourseControlers.updateCourse);
exports.CourseRoutes = router;
