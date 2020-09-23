const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, min: 3, trim: true },
  password: { type: String, required: true, min: 4, trim: true },
});

module.exports = mongoose.model("Admin", adminSchema);
