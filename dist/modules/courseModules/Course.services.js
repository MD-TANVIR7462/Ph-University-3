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
exports.CourseServices = void 0;
const Course_model_1 = require("./Course.model");
const creatACourseInDB = (course) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Course_model_1.CourseModel.create(course);
    return result;
});
const getALlCoursesInDB = (filter, sort, page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    const skip = (page - 1) * limit;
    const query = Course_model_1.CourseModel.find(filter).sort(sort).skip(skip).limit(limit).lean();
    const total = yield Course_model_1.CourseModel.countDocuments(filter);
    const result = yield query.exec();
    return { data: result, total };
});
const getSingleCourseInDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Course_model_1.CourseModel.findById(id).lean();
    return result;
});
const updateCourseInDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Course_model_1.CourseModel.findByIdAndUpdate(id, data, {
        new: true,
    });
    return result;
});
const DeleteOneInDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Course_model_1.CourseModel.findByIdAndDelete(id, { new: true });
    return result;
});
exports.CourseServices = {
    creatACourseInDB,
    getALlCoursesInDB,
    getSingleCourseInDB,
    updateCourseInDB,
    DeleteOneInDB,
};
