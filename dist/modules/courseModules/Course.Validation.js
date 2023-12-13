"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseValidation = void 0;
const zod_1 = require("zod");
const tagSchema = zod_1.z.object({
    name: zod_1.z.string(),
    isDeleted: zod_1.z.boolean().optional(),
});
const detailsSchema = zod_1.z.object({
    level: zod_1.z
        .enum(['Beginner', 'Intermediate', 'Advanced'])
        .refine((data) => data !== undefined, {
        message: 'Level must be either Beginner, Intermediate, or Advanced',
    }),
    description: zod_1.z.string().trim().min(1),
});
const createCourseSchemaValidation = zod_1.z.object({
    title: zod_1.z.string().trim().min(1),
    instructor: zod_1.z.string().trim().min(1),
    categoryId: zod_1.z.string(),
    price: zod_1.z.number().min(0),
    tags: zod_1.z.array(tagSchema),
    startDate: zod_1.z.string().trim().min(1),
    endDate: zod_1.z.string().trim().min(1),
    language: zod_1.z.string().trim().min(1),
    provider: zod_1.z.string().trim().min(1),
    details: detailsSchema,
});
const updateCourseSchemaValidation = zod_1.z.object({
    title: zod_1.z.string().trim().min(1).optional(),
    instructor: zod_1.z.string().trim().min(1).optional(),
    categoryId: zod_1.z.string().optional(),
    price: zod_1.z.number().min(0).optional(),
    tags: zod_1.z.array(tagSchema).optional(),
    startDate: zod_1.z.string().trim().min(1).optional(),
    endDate: zod_1.z.string().trim().min(1).optional(),
    language: zod_1.z.string().trim().min(1).optional(),
    provider: zod_1.z.string().trim().min(1).optional(),
    details: detailsSchema.optional(),
});
exports.CourseValidation = {
    createCourseSchemaValidation,
    updateCourseSchemaValidation,
};
