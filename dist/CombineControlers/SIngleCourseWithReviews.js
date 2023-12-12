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
exports.CombineCourseReview = void 0;
const Course_services_1 = require("../modules/courseModules/Course.services");
const ReviewService_1 = require("../modules/ReviewModules/ReviewService");
const GetSingleCourseWithReviews = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseId } = req.params;
        const result = yield Course_services_1.CourseServices.getSingleCourseInDB(courseId);
        if (Object.keys(result).length > 0) {
            const reviews = yield ReviewService_1.ReviewServices.GetallReviewsForAsingleUserInDB(courseId);
            console.log(reviews);
            res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Course retrived successfully",
                data: { result, reviews: reviews },
            });
        }
    }
    catch (err) {
        next(err);
    }
});
exports.CombineCourseReview = {
    GetSingleCourseWithReviews
};
