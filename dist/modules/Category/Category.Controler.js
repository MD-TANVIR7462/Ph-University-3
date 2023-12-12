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
exports.CategoryControllers = void 0;
const CategoryServicec_1 = require("./CategoryServicec");
const GetAllCategories = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield CategoryServicec_1.CategoryServices.GetAllCategories();
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Categories retrieved successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const CreatCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield CategoryServicec_1.CategoryServices.CreatCategoryInDB(data);
        res.status(201).json({
            success: true,
            statusCode: 201,
            message: "Category created successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.CategoryControllers = {
    GetAllCategories,
    CreatCategory
};
