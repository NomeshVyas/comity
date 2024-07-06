import mongoose from "mongoose";

const navbarSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
}, {timestamps: true})

export const Navbar = mongoose.model("Navbar", navbarSchema)