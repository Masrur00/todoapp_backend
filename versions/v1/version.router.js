const express = require("express");
const router = express.Router();
const todoRouter = require("./routers/todo.router");

router.use("/todo", todoRouter);


module.exports = router;
