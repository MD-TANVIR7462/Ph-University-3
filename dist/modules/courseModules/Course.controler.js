"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseControlers = void 0;
const Course_services_1 = require("./Course.services");
const CreatCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = req.body;
        const result = yield Course_services_1.CourseServices.creatACourseInDB(course);
        res.status(200).json({
            success: true,
            statusCode: 201,
            message: "Course created successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const GetallCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield Course_services_1.CourseServices.getALlCoursesInDB();
        res.status(200).json({
            success: true,
            statusCode: 201,
            message: "all Course retrived successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const GetSingleCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseId } = req.params;
        const result = yield Course_services_1.CourseServices.getSingleCourseInDB(courseId);
        res.status(200).json({
            success: true,
            statusCode: 201,
            message: "Course retrived successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const deleteCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseId } = req.params;
        const result = yield Course_services_1.CourseServices.DeleteOneInDB(courseId);
        res.status(200).json({
            success: true,
            statusCode: 201,
            message: "Course retrived successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const updateCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseId } = req.params;
        const data = req.body;
        const result = yield Course_services_1.CourseServices.updateCourseInDB(courseId, data);
        console.log(courseId, typeof (data));
        // if(result.acknowledged===true) {
        res.status(200).json({
            success: true,
            statusCode: 201,
            message: "Course updated successfully",
            data: result,
        });
        // }
    }
    catch (err) {
        next(err);
    }
});
exports.CourseControlers = {
    CreatCourse,
    GetallCourse,
    GetSingleCourse,
    updateCourse,
    deleteCourse
};
