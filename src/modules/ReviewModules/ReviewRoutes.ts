import { Router } from "express";
import { ReviewControllers } from "./Review.controler";

const router = Router()

router.get('/', ReviewControllers.GetAllReview)
router.post('/', ReviewControllers.CreateReview)
export const ReviewRoutes = router