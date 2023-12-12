"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModel = void 0;
const mongoose_1 = require("mongoose");
const CategoryShema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: [true, "Catetgory Name Required"],
    },
});
exports.CategoryModel = (0, mongoose_1.model)("category", CategoryShema);
