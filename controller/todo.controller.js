

const asynchandler = require("express-async-handler")
const Todo = require("../model/Todo")

exports.createTodo = asynchandler(async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "Todo create Success" })
})
exports.readTodo = asynchandler(async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "readTodo success", result })
})
exports.updateTodo = asynchandler(async (req, res) => {
    await Todo.findByIdAndUpdate(req.body, req.params.id)
    res.json({ message: "Todo Update Success" })
})
exports.deleteTodo = asynchandler(async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: "Todo Update Success" })
})


