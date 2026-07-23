const express = require("express");

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// Temporary Database
let todos = [
    {
        id: 1,
        task: "Learn React"
    }
];

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Todo API");
});

// Get All Todos
app.get("/todos", (req, res) => {
    res.json(todos);
});

// Get Todo By ID
app.get("/todos/:id", (req, res) => {

    const id = Number(req.params.id);

    const todo = todos.find(item => item.id === id);

    if (!todo) {
        return res.status(404).json({
            message: "Todo Not Found"
        });
    }

    res.json(todo);

});

// Add Todo
app.post("/todos", (req, res) => {

    const { task } = req.body;

    const newTodo = {
        id: todos.length + 1,
        task
    };

    todos.push(newTodo);

    res.status(201).json({
        message: "Todo Added",
        data: newTodo
    });

});

// Update Todo
app.put("/todos/:id", (req, res) => {

    const id = Number(req.params.id);

    const { task } = req.body;

    const todo = todos.find(item => item.id === id);

    if (!todo) {
        return res.status(404).json({
            message: "Todo Not Found"
        });
    }

    todo.task = task;

    res.json({
        message: "Todo Updated",
        data: todo
    });

});

// Delete Todo
app.delete("/todos/:id", (req, res) => {

    const id = Number(req.params.id);

    todos = todos.filter(item => item.id !== id);

    res.json({
        message: "Todo Deleted"
    });

});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});