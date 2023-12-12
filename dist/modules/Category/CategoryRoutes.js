"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = require("express");
const Category_Controler_1 = require("./Category.Controler");
const router = (0, express_1.Router)();
router.get("/", Category_Controler_1.CategoryControllers.GetAllCategories);
router.post("/", Category_Controler_1.CategoryControllers.CreatCategory);
exports.CategoryRoutes = router;
