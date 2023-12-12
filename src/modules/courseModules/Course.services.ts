import AppError from "../Errors/AppError";
import { TCourse } from "./Course.interface";
import { CourseModel } from "./Course.model";

const creatACourseInDB = async (course: TCourse) => {
  const result = await CourseModel.create(course);
  return result;
};
const getALlCoursesInDB = async () => {
  const result = await CourseModel.find().lean();
  return result;
};
const getSingleCourseInDB = async (id: string) => {
  const result = await CourseModel.findById(id).lean();
  return result;
};
const updateCourseInDB = async (id: string, data: Partial<TCourse>) => {
  if(Object.keys(data).length>0){
    const result = await CourseModel.findByIdAndUpdate(id, data as object, {
      new: true,
  
    });
    return result
  }
else{
throw new AppError(201,"Please insert a valid feild and value");

}
  
};

const DeleteOneInDB = async (id: string) => {
  const result = await CourseModel.findByIdAndDelete(id, { new: true });
  return result;
};

export const CourseServices = {
  creatACourseInDB,
  getALlCoursesInDB,
  getSingleCourseInDB,
  updateCourseInDB,
  DeleteOneInDB,
};
