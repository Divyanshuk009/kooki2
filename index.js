const path = require("path");
const { log } = require("console");
const express = require("express");
const cookieParser = require("cookie-parser");

require("dotenv").config(); // Load environment variable

const PORT = 9090;
const app = express();

// Routes
const userRoute = require("./routes/user");

// Database

const mongoose = require("mongoose");
const User = require("./models/user");

// connect and create database
mongoose
  .connect("mongodb://localhost:27017/kooki")
  .then(console.log("MongoDb connected !!"))
  .catch((err) => console.error("mongodb connection error: ", err));

// Start port

app.listen(PORT, () => {
  console.log(`server started at : http://localhost:${PORT}`);
});
