import { NextFunction, Request, Response } from "express";
import { CategoryServices } from "./CategoryServicec";
import { CategoryValidation } from "./CategoryValidation";

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
    const ZODvalidation = CategoryValidation.categoryValidation.parse(data);
    const result = await CategoryServices.CreatCategoryInDB(ZODvalidation)
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
const getSingleCategory = async (req: Request, res: Response, next: NextFunction)=>{
  try{
    const {id} = req.params
    const result = await CategoryServices.GetSingleCategories(id)
    res.status(201).json({
        success: true,
        statusCode: 201,
        message: "Category retrived successfully",
        data: result,
      })
  }
  catch(err){
    next(err)
  }
}

export const CategoryControllers = {
    GetAllCategories,
    CreatCategory,
    getSingleCategory
}
