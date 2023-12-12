import { NextFunction, Request, Response } from "express";
import { CategoryServices } from "./CategoryServicec";

const GetAllCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await CategoryServices.GetAllCategories();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Categories retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const CreatCategory = async (req: Request, res: Response, next: NextFunction)=>{
  try{
    const data = req.body
    const result = await CategoryServices.CreatCategoryInDB(data)
    res.status(201).json({
        success: true,
        statusCode: 201,
        message: "Category created successfully",
        data: result,
      })
  }
  catch(err){
    next(err)
  }
}

export const CategoryControllers = {
    GetAllCategories,
    CreatCategory
}
