const express = require("express");
const router = express.Router();
const authController = require("../controllers/task.controller");

router.post("/task", authController.addTask);
router.delete("/task/", authController.deleteTask);
router.patch("/task/", authController.taskDone);
router.patch("/task/edit", authController.updateTask);
router.get("/task", authController.getAllTask);

module.exports = router;
