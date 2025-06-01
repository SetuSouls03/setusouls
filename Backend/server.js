const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");
const authRoutes = require("./routes/auth");

dotenv.config();
connectDB();

const app = express();

// ✅ Use only cors() with proper config
app.use(
  cors({
    origin: "https://setusouls.netlify.app", // EXACT frontend URL
    credentials: true, // allow cookies / auth headers
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ SetuSouls Backend is Live");
});

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
