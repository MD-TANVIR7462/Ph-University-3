
import { Router } from 'express';
import { CourseControlers } from './Course.controler';

const router = Router();

router.post('/',CourseControlers.CreatCourse)

export const CourseRoutes = router