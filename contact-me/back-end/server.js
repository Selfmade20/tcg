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

app.use(express.json());
app.use(cors());

const adminRouter = require("./routes/admin");
app.use("/account", adminRouter);

const port = process.env.PORT;
app.listen(port, console.log(`Server successfully running or port: ${port}`));
