const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");
const authRoutes = require("./routes/auth");
const chapterRoutes = require("./routes/chapterRoutes");

dotenv.config();
connectDB();

const app = express();

// ✅ Define your allowed origins
const allowedOrigins = [
  "https://setusouls.netlify.app",
  "https://setusouls-1.onrender.com",
  "http://192.168.28.161:8081",
  "http://192.168.28.161:19000",
  "exp://192.168.28.161:19000",
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
        console.warn("❌ Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Parse incoming JSON
app.use(express.json());

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("✅ SetuSouls Backend is Live");
});

// ✅ Auth routes
app.use("/api/auth", authRoutes);
// Use Chapter Routes only
app.use("/api/chapters", chapterRoutes);
// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error("🔥 Global Error Handler:", err.message);
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({ message: err.message });
  }
  res.status(500).json({ message: "Something went wrong." });
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
