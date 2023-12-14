
import { Router } from 'express';
import { CourseControlers } from './Course.controler';
import { CombineCourseReview } from '../../CombineControlers/SIngleCourseWithReviews';


const router = Router();


router.get('/',CourseControlers.GetallCourse)
router.get('/:courseId',CourseControlers.GetSingleCourse)
router.get('/:courseId/reviews',CombineCourseReview.GetSingleCourseWithReviews)
router.delete('/:courseId',CourseControlers.deleteCourse)
router.put('/:courseId',CourseControlers.updateCourse)

export const CourseRoutes = router