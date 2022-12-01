const express = require("express");
const router = express.Router();
// const authRouter = require("./routers/auth.router");
const todoRouter = require("./routers/todo.router");


// router.use("/auth", authRouter);
router.use("/todo", todoRouter);


module.exports = router;
