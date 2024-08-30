



const blogController = require("../controller/blog.controller")

const router = require("express").Router()

router
    .get("/", blogController.ReadBlog)
    .post("/add-Blog", blogController.CreatBlog)
    .put("/update-blog/:id", blogController.UpdateBlog)
    .delete("/delete-blog/:id", blogController.DeleteBlog)

module.exports = router