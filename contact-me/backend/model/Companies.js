const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
  },
  webAddress: {
    type: String,
    required: true,
    min: 6,
  },
  physicalAddress: {
    type: String,
    required: true,
    min: 8,
  },
  email: {
    type: String,
    required: true,
    min: 6,
  },
});

module.exports = mongoose.model("Company", companySchema);
