import { NextFunction, Request, Response } from "express";
import { CourseServices } from "../modules/courseModules/Course.services";
import { ReviewServices } from "../modules/ReviewModules/ReviewService";


const GetSingleCourseWithReviews = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { courseId } = req.params;
    const result = await CourseServices.getSingleCourseInDB(courseId);
    if (Object.keys(result as object).length > 0) {
      const reviews = await ReviewServices.GetallReviewsForAsingleUserInDB(
        courseId
      );
      console.log(reviews);
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Course retrived successfully",
        data: { result, reviews: reviews },
      });
    }
  } catch (err) {
    next(err);
  }
};

export const CombineCourseReview = {
  GetSingleCourseWithReviews
}


