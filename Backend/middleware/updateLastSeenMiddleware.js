const User = require("../models/User");

const updateLastSeen = async (req, res, next) => {
  try {
    // assuming req.user is populated by your auth middleware after token verification
    if (req.user) {
      req.user.lastSeen = new Date();
      await req.user.save();
    }
  } catch (err) {
    console.error("Failed to update lastSeen:", err.message);
    // Don't block request if update fails
  }
  next();
};

module.exports = updateLastSeen;
