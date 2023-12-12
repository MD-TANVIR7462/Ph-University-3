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
  const result = await CourseModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
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
    DeleteOneInDB
}