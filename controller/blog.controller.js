
const asynchandler = require("express-async-handler")
const blog = require("../modal/blog")

exports.ReadBlog = asynchandler(async (req, res) => {
    await blog.find()
    res.json({ message: "Add Blog Success" })
})
exports.CreatBlog = asynchandler(async (req, res) => {
    await blog.create(req.body)
    res.json({ message: "Create Blog Success", })
})
exports.UpdateBlog = asynchandler(async (req, res) => {
    await blog.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "Update Blog Success" })
})
exports.DeleteBlog = asynchandler(async (req, res) => {
    await blog.findByIdAndDelete(req.params.id)
    res.json({ message: "Delete Blog Success" })
})