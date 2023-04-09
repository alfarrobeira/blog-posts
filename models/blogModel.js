import mongoose from "mongoose";
const { Schema, model } = mongoose;

const blogSchema = new Schema ({
    author: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: [true, "You should write a message"]
    },
    date: Date,
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    topic: {
        type: String,
        enum: ["art", "sports", "travel"]
    }
})

export default model("Blog", blogSchema);