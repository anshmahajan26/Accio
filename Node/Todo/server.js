const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load Environment Variables from .env file
dotenv.config();

// Connect to MongoDB Database
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
// Parse incoming form submissions (URL-encoded data)
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data (if any)
app.use(express.json());
// Serve static files (like public/style.css) from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Register Routes
app.use("/", require("./routes/todoRoutes"));

// Start Express Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
