import { NextFunction, Request, Response } from "express";
import { ReviewServices } from "./ReviewService";

const CreateReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const result = await ReviewServices.CreatReviewInDB(data);
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
      statusCode: 201,
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