
import { Router } from 'express';
import { CourseControlers } from './Course.controler';

const router = Router();

router.post('/',CourseControlers.CreatCourse)
router.get('/',CourseControlers.GetallCourse)
router.get('/:courseId',CourseControlers.GetSingleCourse)
router.delete('/:courseId',CourseControlers.deleteCourse)
router.put('/:courseId',CourseControlers.updateCourse)

export const CourseRoutes = router