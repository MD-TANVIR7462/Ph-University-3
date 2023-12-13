import { NextFunction, Request, Response } from "express";
import { ReviewServices } from "./ReviewService";
import { ReviewValidation } from "./ReviewsValidation";

const CreateReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const ZodValidation = ReviewValidation.reviewValidation.parse(data)
    const result = await ReviewServices.CreatReviewInDB(ZodValidation);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Review created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const GetAllReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await ReviewServices.GetallReviewsInDB();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Reviews Retrived successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const ReviewControllers ={
    CreateReview,
    GetAllReview
}