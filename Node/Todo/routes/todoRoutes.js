const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

// Define routes and map them to controller actions
router.get("/", todoController.getTodos);
router.post("/add", todoController.addTodo);
router.post("/toggle/:id", todoController.toggleTodo);
router.get("/edit/:id", todoController.getEditPage);
router.post("/edit/:id", todoController.updateTodo);
router.post("/delete/:id", todoController.deleteTodo);

module.exports = router;
