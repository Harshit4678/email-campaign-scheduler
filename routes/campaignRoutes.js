const express = require("express");
const router = express.Router();
const Campaign = require("../models/Campaign");

// POST /api/campaigns
router.post("/", async (req, res) => {
  try {
    const campaign = new Campaign(req.body);
    await campaign.save();
    res.status(201).json({ message: "Campaign created", campaign });
  } catch (err) {
    res.status(500).json({ error: "Failed to create campaign" });
  }
});

module.exports = router;
