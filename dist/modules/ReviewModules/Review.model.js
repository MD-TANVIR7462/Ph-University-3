"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewModel = void 0;
const mongoose_1 = require("mongoose");
const ReviewShema = new mongoose_1.Schema({
    courseId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "course",
        required: [true, "Course Id required"]
    },
    rating: {
        type: Number,
        required: [true, "rating Required"]
    },
    review: {
        type: String,
        required: [true, "review Required"]
    }
});
exports.ReviewModel = (0, mongoose_1.model)("review", ReviewShema);
