const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./db");

const app = express();

/* =========================
   MIDDLEWARE & CORS
========================= */
// 1. Permissive CORS
app.use(cors());

// 2. Manual Header Fallback
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

/* =========================
   HEALTH CHECK
========================= */
app.get("/", (req, res) => {
  res.json({ status: "active", message: "Shri Solar Backend is Running!" });
});

/* =========================
   REQUEST LOGGER
========================= */
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

/* =========================
   DATABASE INITIALIZATION
========================= */
const initDB = async () => {
  try {
    // 1. Create Tables
    await pool.query(`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        name TEXT,
        city TEXT,
        pincode TEXT,
        phone TEXT,
        interest TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        name TEXT,
        phone TEXT,
        email TEXT,
        subject TEXT,
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS vendors (
        id SERIAL PRIMARY KEY,
        name TEXT,
        phone TEXT,
        email TEXT,
        city TEXT,
        company TEXT,
        category TEXT,
        gst TEXT,
        pan TEXT,
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS partners (
        id SERIAL PRIMARY KEY,
        name TEXT,
        phone TEXT,
        email TEXT,
        city TEXT,
        experience TEXT,
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log("Database initialized successfully");
  } catch (err) {
    console.error("Database init error:", err.message);
  }
};
initDB();

/* =========================
   API ENDPOINTS
========================= */

// 1. Submit Lead Form
app.post("/submit-form", async (req, res) => {
  try {
    const { name, city, pincode, phone, interest } = req.body;
    await pool.query(
      "INSERT INTO leads(name, city, pincode, phone, interest) VALUES($1, $2, $3, $4, $5)",
      [name, city, pincode, phone, interest]
    );
    res.json({ success: true, message: "Lead saved successfully!" });
  } catch (err) {
    console.error("DB ERROR:", err.message);
    res.status(500).json({ success: false, message: "Server error: " + err.message });
  }
});

// 2. Submit Mobile Only
app.post("/submit-mobile", async (req, res) => {
  try {
    const { phone } = req.body;
    await pool.query("INSERT INTO leads(phone) VALUES($1)", [phone]);
    res.json({ success: true, message: "Thank you! Our team will contact you soon." });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// 3. Submit Contact Message
app.post("/submit-message", async (req, res) => {
  try {
    const { name, phone, email, subject, message } = req.body;
    await pool.query(
      "INSERT INTO messages(name, phone, email, subject, message) VALUES($1, $2, $3, $4, $5)",
      [name, phone, email, subject, message]
    );
    res.json({ success: true, message: "Message saved successfully!" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// 4. Submit Vendor
app.post("/submit-vendor", async (req, res) => {
  try {
    const { name, phone, email, city, company, category, gst, pan, message } = req.body;
    await pool.query(
      "INSERT INTO vendors(name, phone, email, city, company, category, gst, pan, message) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)",
      [name, phone, email, city, company, category, gst, pan, message]
    );
    res.json({ success: true, message: "Vendor registration submitted!" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// 5. Submit Partner
app.post("/submit-partner", async (req, res) => {
  try {
    const { name, phone, email, city, experience, message } = req.body;
    await pool.query(
      "INSERT INTO partners(name, phone, email, city, experience, message) VALUES($1, $2, $3, $4, $5, $6)",
      [name, phone, email, city, experience, message]
    );
    res.json({ success: true, message: "Application submitted!" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
