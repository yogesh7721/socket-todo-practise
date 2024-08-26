

const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({

    task: { type: String, required: true },
    desc: { type: String, required: true },
    priority: { type: String, required: true },
    complete: { type: String, required: true },
}, { timestamps: true })
module.exports = mongoose.model("todo", TodoSchema)