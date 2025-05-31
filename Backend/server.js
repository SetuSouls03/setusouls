const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");
const authRoutes = require("./routes/auth");

dotenv.config();
connectDB();

const app = express();

// CORS Middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://setusouls.netlify.app"
  ],
  credentials: true,
}));

// ✅ Explicitly handle preflight requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://setusouls.netlify.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ SetuSouls Backend is Live");
});

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
