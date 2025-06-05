const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const startCampaignScheduler = require("./scheduler/campaignScheduler");

dotenv.config();
const app = express();

app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/campaigns", require("./routes/campaignRoutes"));
app.use("/api/leads", require("./routes/leadRoutes"));


// Start scheduler
startCampaignScheduler();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
