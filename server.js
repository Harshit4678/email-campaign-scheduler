const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const startCampaignScheduler = require("./scheduler/campaignScheduler");

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/api/campaigns", require("./routes/campaignRoutes"));
app.use("/api/leads", require("./routes/leadRoutes"));

// Connect to MongoDB and start server only after successful connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ MongoDB Connected");

  // Start the campaign scheduler
  startCampaignScheduler();

  // Start Express server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err.message);
  process.exit(1);
});
