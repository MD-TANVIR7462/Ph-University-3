import { Types } from "mongoose";
import { CourseModel } from "../courseModules/Course.model";
import { TReview } from "./Review.interface";
import { ReviewModel } from "./Review.model";

const CreatReviewInDB = async (data: TReview) => {
    const result = await ReviewModel.create(data);
  
    // Update course's average rating and review count
    const courseId = data.courseId;
    const reviews = await ReviewModel.find({ courseId });
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;
  
    await CourseModel.findByIdAndUpdate(courseId, {
      averageRating,
      reviewCount: reviews.length,
    });
  
    return result;
  };



const GetallReviewsInDB = async () =>{
    const result = await ReviewModel.find()
    return result
}
const GetallReviewsForAsingleUserInDB = async (id:string) =>{
    const result = await ReviewModel.find({
        courseId:{$eq:id}})
 
    return result
}
export const ReviewServices = {
    CreatReviewInDB,
    GetallReviewsInDB,
    GetallReviewsForAsingleUserInDB
}