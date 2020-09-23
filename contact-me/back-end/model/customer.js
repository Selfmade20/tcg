const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  surname: { type: String, required: true, trim: true },
  mobileNumber: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  question: { type: String, required: true, trim: true },
});

module.exports = mongoose.model("Customer", customerSchema);
