const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const authController = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");
const { formatUserDates } = require("../utils/dateFormatter");

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// @route   POST /api/auth/register
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("password").isLength({ min: 6 }).withMessage("6+ characters required"),
    body("contactNumber").matches(/^\d{10}$/).withMessage("10 digits required"),
    body("countryCode").matches(/^\+\d{1,4}$/).withMessage("Valid country code required"),
    body("address").isLength({ min: 5 }).withMessage("5+ characters required"),
  ],
  validate,
  authController.register
);

// @route   POST /api/auth/login
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email required"),
    body("password").notEmpty().withMessage("Password required"),
  ],
  validate,
  authController.login
);

// @route   POST /api/auth/forgotpassword
router.post(
  "/forgotpassword",
  [body("email").isEmail().withMessage("Valid email required")],
  validate,
  authController.forgotPassword
);

// @route   POST /api/auth/verifyotp
router.post(
  "/verifyotp",
  [
    body("email").isEmail().withMessage("Valid email required"),
    body("otp").isLength({ min: 6, max: 6 }).withMessage("6-digit OTP required"),
  ],
  validate,
  authController.verifyOtp
);

// @route   POST /api/auth/resetpassword
router.post(
  "/resetpassword",
  [
    body("email").isEmail().withMessage("Valid email required"),
    body("newPassword").isLength({ min: 6 }).withMessage("6+ characters required"),
  ],
  validate,
  authController.resetPassword
);

// @route   GET /api/auth/profile
router.get("/profile", protect, (req, res) => {
  try {
    res.json({ user: formatUserDates(req.user) });
  } catch (err) {
    console.error("Profile formatting error:", err);
    res.status(500).json({ error: "Failed to format profile data" });
  }
});

module.exports = router;