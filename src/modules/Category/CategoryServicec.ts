import { TCategory } from "./Category.interface";
import { CategoryModel } from "./Category.model";

const CreatCategoryInDB = async (data:TCategory)=>{
    const result = await CategoryModel.create(data);
    return result

}
const UpdateCategoryInDB = async (data:Partial<TCategory>,id:string)=>{
const result = await CategoryModel.findByIdAndUpdate(id,data,{new:true})
    return result
}

const GetAllCategories = async ()=>{
const result = await CategoryModel.find()
return result
}

export const CategoryServices = {
    CreatCategoryInDB,
    UpdateCategoryInDB,
    GetAllCategories
}