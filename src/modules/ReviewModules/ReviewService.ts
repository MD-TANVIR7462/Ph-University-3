import { TReview } from "./Review.interface";
import { ReviewModel } from "./Review.model";

const CreatReviewInDB = async (data:TReview) =>{
    const result = await ReviewModel.create(data)
    return result

}
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