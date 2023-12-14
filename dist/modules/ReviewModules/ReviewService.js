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
exports.ReviewServices = void 0;
const Course_model_1 = require("../courseModules/Course.model");
const Review_model_1 = require("./Review.model");
const CreatReviewInDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Review_model_1.ReviewModel.create(data);
    // Update course's average rating and review count
    const courseId = data.courseId;
    const reviews = yield Review_model_1.ReviewModel.find({ courseId });
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;
    yield Course_model_1.CourseModel.findByIdAndUpdate(courseId, {
        averageRating,
        reviewCount: reviews.length,
    });
    return result;
});
const GetallReviewsInDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Review_model_1.ReviewModel.find();
    return result;
});
const GetallReviewsForAsingleUserInDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Review_model_1.ReviewModel.find({
        courseId: { $eq: id }
    });
    return result;
});
exports.ReviewServices = {
    CreatReviewInDB,
    GetallReviewsInDB,
    GetallReviewsForAsingleUserInDB
};
