import { z } from 'zod';

const reviewValidation = z.object({
    courseId: z.string(),
    rating:z.number().min(0),
    review: z.string().trim().min(1)

})
const reviewUPdateValidation = z.object({
    name: z.string().trim().min(1).optional(),

})
export const ReviewValidation ={
    reviewValidation,
    reviewUPdateValidation
}