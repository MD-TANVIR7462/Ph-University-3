"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryServices = void 0;
const Category_model_1 = require("./Category.model");
const CreatCategoryInDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Category_model_1.CategoryModel.create(data);
    return result;
});
const UpdateCategoryInDB = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Category_model_1.CategoryModel.findByIdAndUpdate(id, data, { new: true });
    return result;
});
const GetAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Category_model_1.CategoryModel.find();
    return result;
});
exports.CategoryServices = {
    CreatCategoryInDB,
    UpdateCategoryInDB,
    GetAllCategories
};
