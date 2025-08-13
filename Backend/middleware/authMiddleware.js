const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Not authorized, token missing or malformed" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");
    if (!user || !user.isActive) {
      return res.status(401).json({ message: "Not authorized, account inactive or deleted" });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("JWT Auth Error:", err.message);
    res.status(401).json({ message: "Not authorized, token invalid or expired" });
  }
};

module.exports = protect;
