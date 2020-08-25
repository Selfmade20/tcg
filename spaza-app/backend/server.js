const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose.connect(
  process.env.DATABASE_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Successfully connected to Mongodb database!");
  }
);

app.use(express.json());

app.use("/user", authRoute);

app.listen(5000, () => console.log("Server Up and Running!"));
