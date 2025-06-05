const cron = require("node-cron");
const Campaign = require("../models/Campaign");

function startCampaignScheduler() {
  cron.schedule("* * * * *", async () => {
    const now = new Date();
    const campaigns = await Campaign.find({ scheduledTime: { $lte: now }, sent: false });

    for (const campaign of campaigns) {
      for (const email of campaign.emailList) {
        console.log(`📧 Sending "${campaign.campaignName}" to ${email}`);
      }

      campaign.sent = true;
      await campaign.save();
    }
  });

  console.log("⏰ Scheduler started...");
}

module.exports = startCampaignScheduler;
