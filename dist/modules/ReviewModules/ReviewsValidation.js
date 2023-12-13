"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewValidation = void 0;
const zod_1 = require("zod");
const reviewValidation = zod_1.z.object({
    courseId: zod_1.z.string(),
    rating: zod_1.z.number().min(0),
    review: zod_1.z.string().trim().min(1)
});
const reviewUPdateValidation = zod_1.z.object({
    name: zod_1.z.string().trim().min(1).optional(),
});
exports.ReviewValidation = {
    reviewValidation,
    reviewUPdateValidation
};
