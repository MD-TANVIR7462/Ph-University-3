import { CourseServices } from "./Course.services";
import { NextFunction, Request, Response } from "express";

const CreatCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const course = req.body;
    const result = await CourseServices.creatACourseInDB(course);
    res.status(200).json({
      success: true,
      statusCode: 201,
      message: "Course created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const CourseControlers = {
    CreatCourse
}

