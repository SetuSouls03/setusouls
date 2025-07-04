const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const authController = require("../controllers/authController");
const protect = require("../middleware/authMiddleware"); // Import the middleware

// Helper middleware to handle validation errors
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
    body("email").isEmail().withMessage("Valid email is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    body("contactNumber")
      .matches(/^\d{10}$/)
      .withMessage("Contact number must be 10 digits"),
  ],
  validate,
  authController.register
);

// @route   POST /api/auth/login
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  validate,
  authController.login
);

// @route   POST /api/auth/forgotpassword
router.post(
  "/forgotpassword",
  [body("email").isEmail().withMessage("Valid email is required")],
  validate,
  authController.forgotPassword
);

// @route   POST /api/auth/verifyotp
router.post(
  "/verifyotp",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("otp")
      .isLength({ min: 6, max: 6 })
      .withMessage("OTP must be 6 digits"),
  ],
  validate,
  authController.verifyOtp
);

// @route   POST /api/auth/resetpassword
router.post(
  "/resetpassword",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("newPassword")
      .isLength({ min: 6 })
      .withMessage("New password must be at least 6 characters"),
  ],
  validate,
  authController.resetPassword
);

// Example protected route
// @route   GET /api/auth/profile
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "User profile data",
    user: req.user,
  });
});

module.exports = router;
