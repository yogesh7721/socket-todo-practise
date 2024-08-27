
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()

// middleware
app.use(express.json())
app.use(cors({ origin: true, credentials: true }))

// routes
app.use("/api/notes", require("./routes/todo.route"))

// 404
app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found" })
})

// step 5 error handler
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: "SERVER ERROR", error: err.message })
})

//connection

mongoose.connect(process.env.MONGO_URL)

mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED");
    app.listen(process.env.PORT, console.log("Server Running...")
    )
})



