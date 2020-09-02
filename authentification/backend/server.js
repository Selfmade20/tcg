const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./routes/auth");

app.use(express.json);
app.use(cors());

app.use("/", authRoute);

app.listen(5000, () => console.log("Server up and running"));
