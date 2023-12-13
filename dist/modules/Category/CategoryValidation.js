"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryValidation = void 0;
const zod_1 = require("zod");
const categoryValidation = zod_1.z.object({
    name: zod_1.z.string().trim().min(1),
});
const categoryUPdateValidation = zod_1.z.object({
    name: zod_1.z.string().trim().min(1).optional(),
});
exports.CategoryValidation = {
    categoryValidation,
    categoryUPdateValidation
};
