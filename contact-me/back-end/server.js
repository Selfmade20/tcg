const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();
mongoose.connect(
  process.env.ATLAS_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Successfully connected to mongoDB database!");
  }
);

app.use(express());
app.use(cors());

const port = process.env.PORT;
app.listen(port, console.log(`Server successfully running or port: ${port}`));
