const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

// 1. Connect to MongoDB using async/await
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/simpleDB");
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
    }
};
connectDB();

// 2. Define Schema and Model explicitly
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});
const User = mongoose.model("User", userSchema);

// CREATE: Add a new user
app.post("/users", async (req, res) => {
    const user = await User.create(req.body);
    res.send(user);
});

// READ: Get all users
app.get("/users", async (req, res) => {
    const users = await User.find();
    res.send(users);
});

// READ ONE: Get a single user by ID
app.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send("User not found");
        res.send(user);
    } catch (error) {
        res.status(400).send("Invalid ID format");
    }
});

// UPDATE: Update a user's details by ID
app.put("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' });
        if (!user) return res.status(404).send("User not found");
        res.send(user);
    } catch (error) {
        res.status(400).send("Invalid ID format");
    }
});

// DELETE: Delete a user by ID
app.delete("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).send("User not found");
        res.send("User deleted");
    } catch (error) {
        res.status(400).send("Invalid ID format");
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));