const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");
const authRoutes = require("./routes/auth");

dotenv.config();
connectDB();

const app = express();

// 👇 Allow CORS from frontend
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://setusouls-1.onrender.com",
    "https://setusouls.netlify.app"
  ],
  credentials: true,
}));



app.use(express.json());

// ✅ Add this root route
app.get("/", (req, res) => {
  res.send("✅ SetuSouls Backend is Live");
});

// 👇 API routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});