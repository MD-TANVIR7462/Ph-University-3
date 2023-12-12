"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRoutes = void 0;
const express_1 = require("express");
const Review_controler_1 = require("./Review.controler");
const router = (0, express_1.Router)();
router.get('/', Review_controler_1.ReviewControllers.GetAllReview);
router.post('/', Review_controler_1.ReviewControllers.CreateReview);
exports.ReviewRoutes = router;
