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
    const query = Course_model_1.CourseModel.find(filter).sort(sort).skip(skip).limit(limit).lean();
    const total = yield Course_model_1.CourseModel.countDocuments(filter);
    const result = yield query.exec();
    return { data: result, total };
});
const getSingleCourseInDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Course_model_1.CourseModel.findById(id).lean();
    return result;
});
// const updateCourseInDB = async (id: string, data: Partial<TCourse>) => {
//   const result = await CourseModel.findByIdAndUpdate(id, data as object, {
//     new: true,
//   });
//   return result
// };
const updateCourseInDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    // Extract the tags and other update data from the incoming data
    const { tags } = data, updateData = __rest(data, ["tags"]);
    // Fetch the existing course
    const existingCourse = yield Course_model_1.CourseModel.findById(id);
    // If the course doesn't exist, throw an error or handle it appropriately
    if (!existingCourse) {
        throw new Error('Course not found');
    }
    // Update the tags based on the incoming data
    if (tags && Array.isArray(tags)) {
        tags.forEach((newTag) => {
            const existingTagIndex = existingCourse.tags.findIndex((tag) => tag.name === newTag.name);
            if (existingTagIndex !== -1) {
                // Update the existing tag if it exists
                existingCourse.tags[existingTagIndex] = newTag;
            }
            else if (!newTag.isDeleted) {
                // Add the new tag if it doesn't exist and is not marked as deleted
                existingCourse.tags.push(newTag);
            }
        });
        // Remove tags marked as deleted
        existingCourse.tags = existingCourse.tags.filter((tag) => !tag.isDeleted);
    }
    // Update other fields as needed
    Object.assign(existingCourse, updateData);
    // Save the updated course
    const result = yield existingCourse.save();
    return result;
});
exports.default = {
    updateCourseInDB,
};
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
