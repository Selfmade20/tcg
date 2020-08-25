const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(
  process.env.DATABASE_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Successfully connected to Mongodb database!");
  }
);
const authRoute = require("./routes/auth");

app.use("/user", authRoute);

app.listen(5000, () => console.log("Server Up and Running!"));
