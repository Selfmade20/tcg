const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  IDnumber: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
