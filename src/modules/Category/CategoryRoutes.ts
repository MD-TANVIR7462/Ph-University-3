import { Router } from "express";
import { CategoryControllers } from "./Category.Controler";
const router = Router()

router.get("/",CategoryControllers.GetAllCategories)
router.get("/:id",CategoryControllers.getSingleCategory)
router.post("/",CategoryControllers.CreatCategory)

export const CategoryRoutes = router