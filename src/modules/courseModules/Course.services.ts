import { TCourse } from "./Course.interface";
import { CourseModel } from "./Course.model";

const creatACourseInDB = async (course: TCourse) => {
  const result = await CourseModel.create(course);
  return result;
};
const getALlCoursesInDB = async (
  filter: any,
  sort: any,
  page: number,
  limit: number
) => {
  const skip = (page - 1) * limit;

  const query = CourseModel.find(filter)
    .sort(sort)
    .skip(skip)
    .limit(limit)
    .lean();
  const total = await CourseModel.countDocuments(filter);

  const result = await query.exec();

  return { data: result, total };
};

const getSingleCourseInDB = async (id: string) => {
  const result = await CourseModel.findById(id).lean();
  return result;
};



const updateCourseInDB = async (id: string, data: Partial<TCourse>) => {
  console.log(data);
  const { tags, details, ...updateData } = data;

  const existingCourse = await CourseModel.findById(id);

  if (!existingCourse) {
    throw new Error("Course not found");
  }

  if (tags && Array.isArray(tags)) {
    tags.forEach((newTag) => {
      const existingTagIndex = existingCourse.tags.findIndex(
        (tag) => tag.name === newTag.name
      );

      if (existingTagIndex !== -1) {
        existingCourse.tags[existingTagIndex] = newTag;
      } else if (!newTag.isDeleted) {
        existingCourse.tags.push(newTag);
      }
    });

    existingCourse.tags = existingCourse.tags.filter((tag) => !tag.isDeleted);
  }

  if (details && typeof details === 'object') {

    existingCourse.details = { ...existingCourse.details, ...details };
  }

  Object.assign(existingCourse, updateData);

  const result = await existingCourse.save();

  return result;
};




const DeleteOneInDB = async (id: string) => {
  const result = await CourseModel.findByIdAndDelete(id, { new: true });
  return result;
};

const getBestCourseInDB = async () => {
  const bestCourse = await CourseModel.findOne().sort('-averageRating').lean();

  if (!bestCourse) {
    
    return null;
  }

  const { averageRating, reviewCount, ...courseDetails } = bestCourse;

  return {
    course: courseDetails,
    averageRating,
    reviewCount,
  };
};


export const CourseServices = {
  creatACourseInDB,
  getALlCoursesInDB,
  getSingleCourseInDB,
  updateCourseInDB,
  DeleteOneInDB,
  getBestCourseInDB
};
