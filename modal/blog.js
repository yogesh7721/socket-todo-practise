


const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({

    task: { type: String, resquired: true },
    desc: { type: String, resquired: true },
    Priority: { type: String, resquired: true },
    hero: { type: String, resquired: true },
    complete: { type: Boolean, required: false }
}, { timestamps: true })

module.exports = mongoose.model("blog", blogSchema)