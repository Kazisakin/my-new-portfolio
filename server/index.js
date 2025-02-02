// server/index.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// MONGODB Atlas connection
mongoose
  .connect("mongodb+srv://kazisakin:Mywork3695@cluster0.kgw54.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
