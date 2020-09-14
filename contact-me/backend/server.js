const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose.connect(
  process.env.DATABASE,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Successfully connected to Mongodb database!");
  }
);

app.use(express.json());
app.use(cors());
app.use("/", authRoute);

app.listen(4000, () => console.log("Server Up and Running!"));
