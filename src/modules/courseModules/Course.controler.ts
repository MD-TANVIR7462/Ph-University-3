
import { CourseValidation } from "./Course.Validation";
import { CourseServices } from "./Course.services";
import { NextFunction, Request, Response } from "express";




const CreatCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const course = req.body;
   const ZodValidation = CourseValidation.createCourseSchemaValidation.parse(course)
    const result = await CourseServices.creatACourseInDB(ZodValidation);
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
const GetallCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await CourseServices.getALlCoursesInDB();
    res.status(200).json({
      success: true,
      statusCode: 201,
      message: "all Course retrived successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const GetSingleCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { courseId } = req.params;
    const result = await CourseServices.getSingleCourseInDB(courseId);
    res.status(200).json({
      success: true,
      statusCode: 201,
      message: "Course retrived successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};


const deleteCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { courseId } = req.params;
    const result = await CourseServices.DeleteOneInDB(courseId);
    res.status(200).json({
      success: true,
      statusCode: 201,
      message: "Course retrived successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const updateCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { courseId } = req.params;
    const data = req.body;
const ZodValidationUpdate = CourseValidation.updateCourseSchemaValidation.parse(data)
    const result = await CourseServices.updateCourseInDB(courseId, ZodValidationUpdate);

    if (result) {
      res.status(200).json({
        success: true,
        statusCode: 201,
        message: "Course updated successfully",
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        statusCode: 404,
        message: "Course Not Updated",
      });
    }
  } catch (err) {
    next(err);
  }
};

export const CourseControlers = {
  CreatCourse,
  GetallCourse,
  GetSingleCourse,
  updateCourse,
  deleteCourse,

};
