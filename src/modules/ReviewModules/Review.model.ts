import { Schema, model } from "mongoose";
import { TReview } from "./Review.interface";

const ReviewShema = new Schema<TReview>({
    courseId: {
        type: Schema.Types.ObjectId,
        ref: "course",
        required: [true,"Course Id required"]
    },
    rating: {
        type: Number,
        min:1,
        max:5,
        required: [true,"rating Required"] 
    },
    review: {
        type: String,
        required: [true,"review Required"]
    }
})

export const ReviewModel = model<TReview>("review",ReviewShema)