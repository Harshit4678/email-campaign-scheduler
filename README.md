# Email Campaign Scheduler

A simple backend system to schedule and simulate email campaigns using Node.js, Express, and MongoDB Atlas. It provides APIs to create campaigns, retrieve leads, and runs a background scheduler to check and "send" campaigns based on scheduled time.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- node-cron
- dotenv

---

## Features

- Create scheduled email campaigns with user ID, campaign name, scheduled time, and recipient list
- Fetch dummy leads associated with a user
- Scheduler runs every minute to simulate sending emails
- Campaigns are marked as sent once processed

---

## Files & Structure (Overview)

- `models/`: Contains Mongoose schemas for `Campaign` and `Lead`.
- `routes/`: Includes Express route handlers for `/api/campaigns` and `/api/leads`.
- `scheduler/`: Contains a cron job that checks and sends due email campaigns.
- `.env`: Environment variables like MongoDB URI and PORT.
- `server.js`: Main entry point that sets up Express, connects to MongoDB, starts the scheduler and server.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/email-campaign-scheduler.git
cd email-campaign-scheduler
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file:

```
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=5000
```

### 4. Start the Server (Local Testing)

```bash
npm run dev
```

If successful, you'll see:

```
✅ MongoDB Connected
🚀 Server running on port 5000
```

---

##  API Endpoints (Test on Postman)

### ➕ Create a Campaign

**POST** `/api/campaigns`  
**Body:** 
```json
{
  "userId": "user123",
  "campaignName": "Product Launch",
  "scheduledTime": "2025-06-04T19:45:00.000Z",
  "emailList": ["example1@mail.com", "example2@mail.com"]
}
```

✅ Successful Response with '200' status code on postman :

```json
{
  "_id": "665f3f3f6bde91a9b82e5e99",
  "userId": "user123",
  "campaignName": "Product Launch",
  "scheduledTime": "2025-06-04T19:45:00.000Z",
  "emailList": ["example1@mail.com", "example2@mail.com"],
  "sent": false,
  "__v": 0
}
```

### 📋 Get Leads by User

**GET** `/api/leads/user123`  
Returns dummy leads for the specified user ID.

---

## 🕒 Scheduler Behavior

The scheduler runs every minute using `node-cron`. It checks campaigns with `sent: false` and a scheduled time equal to or earlier than the current time. Each email is logged to the console and the campaign is marked as sent.

Example console log:

```
Sending email to example1@mail.com from campaign: Product Launch
```

---

## ☁️ Deployment

You can deploy this backend easily using [Railway](https://railway.app):

1. Go to https://railway.app and log in.
2. Click **New Project** > **Deploy from GitHub Repo**.
3. Connect your GitHub and select this repo.
4. Go to **Variables** and add:

   - `MONGODB_URI` = your MongoDB Atlas URI

5. Railway will build and deploy your project.
6. Copy the generated public URL to test your APIs.

### ✅ Deployed Link for Testing

Use your live deployed endpoint like:

**Create Campaign:**  
`POST https://email-campaign-scheduler-production.up.railway.app/api/campaigns`

**Get Leads:**  
`GET https://email-campaign-scheduler-production.up.railway.app/api/leads/user123`

---

## Author

Made by **Harshit Kumar** — for learning and demonstration purposes.
