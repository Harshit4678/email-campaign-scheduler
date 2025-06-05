const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
  userId: String,
  campaignName: String,
  scheduledTime: Date,
  emailList: [String],
  sent: { type: Boolean, default: false }
});

module.exports = mongoose.model("Campaign", campaignSchema);
