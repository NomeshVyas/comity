import mongoose from "mongoose";

const coursesSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    showThis: {
        type: Boolean,
        default: true
    }
}, {timestamps: true})

export const Courses = mongoose.model("courses", coursesSchema)