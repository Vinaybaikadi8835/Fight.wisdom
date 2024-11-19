const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const MONGO_URI = "mongodb+srv://nanivinay8835:DJ6oPIVl2n0tFzJv@cluster0.ofbwy.mongodb.net/"; // Replace with your MongoDB Atlas URI
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Email Schema
const emailSchema = new mongoose.Schema({
  email: { type: String, required: true },
});

const Email = mongoose.model("Email", emailSchema);

// API Endpoint for Saving Emails
app.post("/api/emails", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const newEmail = new Email({ email });
    await newEmail.save();
    res.status(200).json({ message: "Email saved successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Server error, please try again" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
