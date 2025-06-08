const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");
const authRoutes = require("./routes/auth");

dotenv.config();
connectDB();

const app = express();

// ✅ Define your allowed origins
const allowedOrigins = [
  "https://setusouls.netlify.app",        // Netlify frontend
  "https://setusouls-1.onrender.com",     // Your Render backend itself (for testing if needed)
  "http://192.168.28.161:8081",           // Expo Dev Tools
  "http://192.168.28.161:19000",          // Expo Go Dev
  "exp://192.168.28.161:19000",           // Expo Go Protocol
  "https://setuasia.info",
  "http://localhost:5173",
];

// ✅ CORS config with preflight support
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("❌ Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow OPTIONS!
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Ensure express parses JSON
app.use(express.json());

// ✅ Simple test route
app.get("/", (req, res) => {
  res.send("✅ SetuSouls Backend is Live");
});

// ✅ Use your routes
app.use("/api/auth", authRoutes);

// ✅ Global error handler (to prevent 500 on preflight failure)
app.use((err, req, res, next) => {
  console.error("🔥 Internal error:", err.message);
  if (err.message === "Not allowed by CORS") {
    res.status(403).send({ message: err.message });
  } else {
    res.status(500).send({ message: "Something went wrong." });
  }
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
