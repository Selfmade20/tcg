const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
  },
  surname: {
    type: String,
    required: true,
    min: 3,
  },
  mobileNumber: {
    type: String,
    required: true,
    min: 10,
  },
  email: {
    type: String,
    required: true,
    min: 6,
  },
  question: {
    type: String,
    required: true,
    min: 6,
  },
});

module.exports = mongoose.model("User", userSchema);
