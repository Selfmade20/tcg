const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  websiteAddress: { type: String, required: true, trim: true },
  physicalAddress: { type: String, required: true, trim: true },
  emailAddress: { type: String, required: true, trim: true },
  phoneNumber: { type: Number, required: true, min: 15 },
});

module.exports = mongoose.model("Company", companySchema);
