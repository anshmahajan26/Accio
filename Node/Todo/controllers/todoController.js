const Todo = require("../models/Todo");

// @desc    Get all todos
// @route   GET /
exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find().sort({ createdAt: -1 });
        res.render("index", { todos });
    } catch (error) {
        res.status(500).send("Server Error: " + error.message);
    }
};

// @desc    Add a new todo
// @route   POST /add
exports.addTodo = async (req, res) => {
    try {
        const { task } = req.body;
        if (!task || task.trim() === "") {
            return res.redirect("/");
        }
        await Todo.create({ task: task.trim() });
        res.redirect("/");
    } catch (error) {
        res.status(500).send("Server Error: " + error.message);
    }
};

// @desc    Toggle todo completed status
// @route   POST /toggle/:id
exports.toggleTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (todo) {
            todo.completed = !todo.completed;
            await todo.save();
        }
        res.redirect("/");
    } catch (error) {
        res.status(500).send("Server Error: " + error.message);
    }
};

// @desc    Get edit page
// @route   GET /edit/:id
exports.getEditPage = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).send("Todo Not Found");
        }
        res.render("edit", { todo });
    } catch (error) {
        res.status(500).send("Server Error: " + error.message);
    }
};

// @desc    Update a todo
// @route   POST /edit/:id
exports.updateTodo = async (req, res) => {
    try {
        const { task } = req.body;
        if (!task || task.trim() === "") {
            return res.redirect("/");
        }
        await Todo.findByIdAndUpdate(req.params.id, { task: task.trim() });
        res.redirect("/");
    } catch (error) {
        res.status(500).send("Server Error: " + error.message);
    }
};

// @desc    Delete a todo
// @route   POST /delete/:id
exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.redirect("/");
    } catch (error) {
        res.status(500).send("Server Error: " + error.message);
    }
};
