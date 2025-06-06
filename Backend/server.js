const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");
const authRoutes = require("./routes/auth");

dotenv.config();
connectDB();

const app = express();

// ✅ Define allowed origins (Netlify + Expo Dev IPs)
const allowedOrigins = [
  "https://setusouls.netlify.app",         // Web frontend (Netlify)
  "http://192.168.28.161:8081",            // Expo Dev Tools
  "http://192.168.28.161:19000",           // Expo JS server (Android/iOS)
  "exp://192.168.28.161:19000",            // Expo Go protocol
];

// ✅ Apply CORS middleware with dynamic origin check
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS: " + origin));
      }
    },
    credentials: true, // If you're sending cookies or auth headers
  })
);

app.use(express.json());

// ✅ Simple test route
app.get("/", (req, res) => {
  res.send("✅ SetuSouls Backend is Live");
});

// ✅ Auth routes
app.use("/api/auth", authRoutes);

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
