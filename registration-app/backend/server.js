const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

app.use(express.json());

mongoose.connect(
  "mongodb+srv://Tebogo:Tebogo1@cluster0.xamyf.mongodb.net/Registration?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => {
    console.log("Connected to the mongodb database");
  }
);

app.use(authRoute);

app.listen(4000, console.log("Server up and running!"));
