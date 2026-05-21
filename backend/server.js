const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./db");

const app = express();

/* =========================
   MIDDLEWARE
========================= */
app.use(cors());
app.use(express.json());

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
    // 1. Create Tables if they don't exist
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

    // 2. IMPORTANT: Add columns if table already existed without them
    try {
      await pool.query("ALTER TABLE leads ADD COLUMN IF NOT EXISTS pincode TEXT");
      await pool.query("ALTER TABLE leads ADD COLUMN IF NOT EXISTS interest TEXT");
      console.log("Table columns verified");
    } catch (columnErr) {
      console.log("Column check complete");
    }

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

    console.log("Database initialized successfully");
  } catch (err) {
    console.error("Database init error:", err);
  }
};
initDB();

/* =========================
   API ENDPOINTS
========================= */

// 1. Submit Lead Form (Modal / Survey)
app.post("/submit-form", async (req, res) => {
  try {
    const { name, city, pincode, phone, interest } = req.body;
    console.log("Received Lead:", { name, city, pincode, phone, interest });

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


// 2. Submit Mobile Only (Banner/Sidebar)
app.post("/submit-mobile", async (req, res) => {
  try {
    const { phone } = req.body;
    await pool.query("INSERT INTO leads(phone) VALUES($1)", [phone]);
    res.json({ success: true, message: "Thank you! Our team will contact you soon." });
  } catch (err) {
    console.error(err);
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
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// 4. Submit Vendor Registration
app.post("/submit-vendor", async (req, res) => {
  try {
    const { name, phone, email, city, company, category, gst, pan, message } = req.body;
    await pool.query(
      "INSERT INTO vendors(name, phone, email, city, company, category, gst, pan, message) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)",
      [name, phone, email, city, company, category, gst, pan, message]
    );
    res.json({ success: true, message: "Vendor registration submitted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// 5. Submit Channel Partner
app.post("/submit-partner", async (req, res) => {
  try {
    const { name, phone, email, city, experience, message } = req.body;
    await pool.query(
      "INSERT INTO partners(name, phone, email, city, experience, message) VALUES($1, $2, $3, $4, $5, $6)",
      [name, phone, email, city, experience, message]
    );
    res.json({ success: true, message: "Partner application submitted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

/* =========================
   VIEW DATA (Admin Debug)
========================= */

// View all leads
app.get("/view-leads", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM leads ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).send("Error fetching leads: " + err.message);
  }
});

// View all messages
app.get("/view-messages", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM messages ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).send("Error fetching messages: " + err.message);
  }
});

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
