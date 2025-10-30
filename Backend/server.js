// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const compression = require("compression");
const helmet = require("helmet");
const connectDB = require("./db");

// Routes
const authRoutes = require("./routes/auth");
const chapterRoutes = require("./routes/chapterRoutes");
const noteRoutes = require("./routes/noteRoutes");

dotenv.config();
connectDB();

const app = express();

/* ✅ 1️⃣ Security & Performance */
app.use(helmet());
app.use(compression());

/* ✅ 2️⃣ Define Allowed Origins (CORS) */
const allowedOrigins = [
  "https://setusouls.netlify.app",
  "https://setusouls-1.onrender.com",
  "http://192.168.28.161:8081",
  "http://192.168.28.161:19000",
  "exp://192.168.28.161:19000",
  "https://setuasia.info",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
      console.warn("❌ Blocked by CORS:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* ✅ 3️⃣ JSON Parser */
app.use(express.json({ limit: "2mb" }));

/* ✅ 4️⃣ Health Check */
app.get("/", (req, res) => {
  res.send("✅ SetuSouls Backend is Live and Optimized!");
});

/* ✅ 5️⃣ API Routes */
app.use("/api/auth", authRoutes);
app.use("/api/chapters", chapterRoutes);
app.use("/api/notes", noteRoutes);

/* ✅ 6️⃣ Global Error Handler */
app.use((err, req, res, next) => {
  console.error("🔥 Global Error Handler:", err.message);
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({ message: err.message });
  }
  res.status(500).json({ message: "Something went wrong." });
});

/* ✅ 7️⃣ Start Server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
