import { z } from 'zod';


const tagSchema = z.object({
  name: z.string(),
  isDeleted: z.boolean().optional(),
});


const detailsSchema = z.object({
  level: z
    .enum(['Beginner', 'Intermediate', 'Advanced'])
    .refine((data) => data !== undefined, {
      message: 'Level must be either Beginner, Intermediate, or Advanced',
    }),
  description: z.string().trim().min(1),
});


const createCourseSchemaValidation = z.object({
  title: z.string().trim().min(1),
  instructor: z.string().trim().min(1),
  categoryId: z.string(),
  price: z.number().min(0),
  tags: z.array(tagSchema),
  startDate: z.string().trim().min(1),
  endDate: z.string().trim().min(1),
  language: z.string().trim().min(1),
  provider: z.string().trim().min(1),
  durationInWeeks:z.number().optional(),
  details: detailsSchema,
});
const updateCourseSchemaValidation = z.object({
  title: z.string().trim().min(1).optional(),
  instructor: z.string().trim().min(1).optional(),
  categoryId: z.string().optional(),
  price: z.number().min(0).optional(),
  tags: z.array(tagSchema).optional(),
  startDate: z.string().trim().min(1).optional(),
  endDate: z.string().trim().min(1).optional(),
  language: z.string().trim().min(1).optional(),
  provider: z.string().trim().min(1).optional(),
  durationInWeeks:z.number().optional(),
  details: detailsSchema.optional(),
});

export const CourseValidation = {
  createCourseSchemaValidation,
  updateCourseSchemaValidation,
};