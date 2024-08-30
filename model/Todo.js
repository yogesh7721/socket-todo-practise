

const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({

    task: { type: String, required: true },
    desc: { type: String, required: true },
    priority: { type: String, required: true },
    hero: { type: String, required: true },
    complete: { type: String, default: false },
}, { timestamps: true })
module.exports = mongoose.model("todo", TodoSchema)

