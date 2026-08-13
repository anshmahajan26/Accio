const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mongoConnectionDB";

// Middleware to parse JSON bodies
app.use(express.json());

// 1. Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then((conn) => {
    console.log(`Connected to MongoDB successfully: ${conn.connection.host}`);
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
    console.log("Please ensure MongoDB is running locally on your system.");
  });

// 2. Define the User Schema and Model
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
    },
    age: {
      type: Number,
      min: [0, "Age cannot be negative"],
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt properties
  }
);

const User = mongoose.model("User", userSchema);

// 3. CRUD Endpoints

// ROOT ENDPOINT
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Mongoose CRUD API",
    endpoints: {
      create: "POST /api/users",
      readAll: "GET /api/users",
      readOne: "GET /api/users/:id",
      update: "PUT /api/users/:id",
      delete: "DELETE /api/users/:id",
    },
  });
});

// CREATE: POST /api/users
app.post("/api/users", async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newUser = new User({ name, email, age });
    const savedUser = await newUser.save();
    res.status(201).json({
      success: true,
      data: savedUser,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Email already exists.",
      });
    }
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// READ (ALL): GET /api/users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// READ (ONE): GET /api/users/:id
app.get("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: `User with ID ${req.params.id} not found`,
      });
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid ID format or server error",
    });
  }
});

// UPDATE: PUT /api/users/:id
app.put("/api/users/:id", async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, age },
      { new: true, runValidators: true } // Return updated document and run validations
    );
    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: `User with ID ${req.params.id} not found`,
      });
    }
    res.status(200).json({
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Email already exists.",
      });
    }
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// DELETE: DELETE /api/users/:id
app.delete("/api/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: `User with ID ${req.params.id} not found`,
      });
    }
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deletedUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// 4. Start the Express Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});