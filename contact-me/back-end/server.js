const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

app.use(express());
app.use(cors());

const port = process.env.PORT;

app.listen(port, console.log(`Server successfully running or port: ${port}`));
