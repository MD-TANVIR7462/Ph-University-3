import { Schema, model, connect } from "mongoose";
import { TCourse, TDetails, Tags } from "./Course.interface";

const TagsSchema = new Schema<Tags>({
  name: {
    type: String,
    required: [true, "Tag name is required"],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const DetailsSchema = new Schema<TDetails>({
  level: {
    type: String,
    enum: {
      values: ["Beginner", "Intermediate", "Advanced"],
      message: "Level must be either Beginner, Intermediate or Advanced",
    },

    required: [true, "Level is required"],
  },
  description: {
    type: String,
    trim:true,
    required: [true, "Description is required"],
  },
});

const courseSchema = new Schema<TCourse>({
  title: {
    type: String,
    unique: true,
    trim: true,
    required: [true, "Title is required"],
  },

  instructor: {
    type: String,
    trim:true,
    required: [true, "Instructor is required"],
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: [true, "CategoryId is required"],
   
    // ref: "Category",
  },
  price: { type: Number, required: [true, "Price is required"] },
  tags: { type: [TagsSchema], required: [true, "Tags is required"] },
  startDate: { type: String,   trim:true, required: [true, "Start Date is required"] },
  endDate: { type: String,   trim:true, required: [true, "End Date is required"] },
  language: { type: String,   trim:true, required: [true, "Language is required"] },
  provider: { type: String,   trim:true, required: [true, "provider is required"] },
  details: { type: DetailsSchema, required: [true, "Details is required"] },
});

export const CourseModel = model<TCourse>("course", courseSchema);
