const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");

// Get leads for a user
router.get("/:userId", async (req, res) => {
  try {
    const leads = await Lead.find({ userId: req.params.userId });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch leads" });
  }
});

// Seed dummy leads
router.post("/seed", async (req, res) => {
  try {
    const dummyLeads = [
      { userId: "user123", name: "Rishabh pant", email: "Rishabh001@example.com" },
      { userId: "user123", name: "Pat cummins ", email: "pattyC001@example.com" },
      { userId: "user456", name: "Abhisekh S", email: "AbhiS001@example.com" }
    ];
    await Lead.insertMany(dummyLeads);
    res.json({ message: "Dummy leads inserted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to insert dummy leads" });
  }
});

module.exports = router; // ✅ THIS IS IMPORTANT
