import { Schema, model } from "mongoose";
import { TCategory } from "./Category.interface";

const CategoryShema = new Schema<TCategory>({
  name: {
    type: String,
    unique:true,
    trim:true,
    required: [true, "Catetgory Name Required"],

  },
});


export const CategoryModel = model<TCategory>("category",CategoryShema)
