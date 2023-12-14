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
const Course_Validation_1 = require("./Course.Validation");
const Course_services_1 = require("./Course.services");
const CreatCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = req.body;
        const ZodValidation = Course_Validation_1.CourseValidation.createCourseSchemaValidation.parse(course);
        const startDate = new Date(ZodValidation.startDate);
        const endDate = new Date(ZodValidation.endDate);
        const millisecondsInWeek = 7 * 24 * 60 * 60 * 1000;
        const durationInWeeks = Math.ceil((endDate.getTime() - startDate.getTime()) / millisecondsInWeek);
        ZodValidation.durationInWeeks = durationInWeeks;
        const result = yield Course_services_1.CourseServices.creatACourseInDB(ZodValidation);
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
        const { limit = '10', sortBy, sortOrder, minPrice, maxPrice, tags, startDate, endDate, language, provider, durationInWeeks, level, } = req.query;
        const page = req.params.page || 1;
        const pageNumber = Array.isArray(page) ? parseInt(page[0]) : parseInt(page);
        const limitNumber = parseInt(limit);
        const filter = {};
        if (minPrice)
            filter.price = { $gte: parseFloat(minPrice) };
        if (maxPrice)
            filter.price = Object.assign(Object.assign({}, filter.price), { $lte: parseFloat(maxPrice) });
        if (tags)
            filter['tags.name'] = tags;
        if (startDate)
            filter.startDate = { $gte: new Date(startDate) };
        if (endDate)
            filter.endDate = { $lte: new Date(endDate) };
        if (language)
            filter.language = language;
        if (provider)
            filter.provider = provider;
        if (durationInWeeks)
            filter.durationInWeeks = parseInt(durationInWeeks);
        if (level)
            filter['details.level'] = level;
        const sort = {};
        if (sortBy)
            sort[sortBy] = sortOrder === 'desc' ? -1 : 1;
        const result = yield Course_services_1.CourseServices.getALlCoursesInDB(filter, sort, pageNumber, limitNumber);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Courses retrieved successfully',
            meta: {
                page: pageNumber,
                limit: limitNumber,
                total: result.total,
            },
            data: result.data,
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
        const zodData = Course_Validation_1.CourseValidation.updateCourseSchemaValidation.parse(data);
        const result = yield Course_services_1.CourseServices.updateCourseInDB(courseId, zodData);
        res.status(200).json({
            success: true,
            statusCode: 201,
            message: "Course updated successfully",
            data: result,
        });
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
    deleteCourse,
};
