const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  userId: String,
  email: String,
  name: String
});

module.exports = mongoose.model("Lead", leadSchema);
