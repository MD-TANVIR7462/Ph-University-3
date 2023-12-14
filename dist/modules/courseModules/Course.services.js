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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseServices = void 0;
const Course_model_1 = require("./Course.model");
const creatACourseInDB = (course) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Course_model_1.CourseModel.create(course);
    return result;
});
const getALlCoursesInDB = (filter, sort, page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    const skip = (page - 1) * limit;
    const query = Course_model_1.CourseModel.find(filter)
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .lean();
    const total = yield Course_model_1.CourseModel.countDocuments(filter);
    const result = yield query.exec();
    return { data: result, total };
});
const getSingleCourseInDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Course_model_1.CourseModel.findById(id).lean();
    return result;
});
const updateCourseInDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(data);
    const { tags, details } = data, updateData = __rest(data, ["tags", "details"]);
    const existingCourse = yield Course_model_1.CourseModel.findById(id);
    if (!existingCourse) {
        throw new Error("Course not found");
    }
    if (tags && Array.isArray(tags)) {
        tags.forEach((newTag) => {
            const existingTagIndex = existingCourse.tags.findIndex((tag) => tag.name === newTag.name);
            if (existingTagIndex !== -1) {
                existingCourse.tags[existingTagIndex] = newTag;
            }
            else if (!newTag.isDeleted) {
                existingCourse.tags.push(newTag);
            }
        });
        existingCourse.tags = existingCourse.tags.filter((tag) => !tag.isDeleted);
    }
    if (details && typeof details === 'object') {
        existingCourse.details = Object.assign(Object.assign({}, existingCourse.details), details);
    }
    Object.assign(existingCourse, updateData);
    const result = yield existingCourse.save();
    return result;
});
const DeleteOneInDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Course_model_1.CourseModel.findByIdAndDelete(id, { new: true });
    return result;
});
const getBestCourseInDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const bestCourse = yield Course_model_1.CourseModel.findOne().sort('-averageRating').lean();
    if (!bestCourse) {
        return null;
    }
    const { averageRating, reviewCount } = bestCourse, courseDetails = __rest(bestCourse, ["averageRating", "reviewCount"]);
    return {
        course: courseDetails,
        averageRating,
        reviewCount,
    };
});
exports.CourseServices = {
    creatACourseInDB,
    getALlCoursesInDB,
    getSingleCourseInDB,
    updateCourseInDB,
    DeleteOneInDB,
    getBestCourseInDB
};
