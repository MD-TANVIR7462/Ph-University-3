import AppError from "../../Errors/AppError";
import { TCourse } from "./Course.interface";
import { CourseModel } from "./Course.model";

const creatACourseInDB = async (course: TCourse) => {
  const result = await CourseModel.create(course);
  return result;
};
const getALlCoursesInDB = async (filter: any, sort: any, page: number, limit: number) => {
  const skip = (page - 1) * limit;

  const query = CourseModel.find(filter).sort(sort).skip(skip).limit(limit).lean();
  const total = await CourseModel.countDocuments(filter);

  const result = await query.exec();

  return { data: result, total };
};

const getSingleCourseInDB = async (id: string) => {
  const result = await CourseModel.findById(id).lean();
  return result;
};
const updateCourseInDB = async (id: string, data: Partial<TCourse>) => {
  const result = await CourseModel.findByIdAndUpdate(id, data as object, {
    new: true,
  });
  return result
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
