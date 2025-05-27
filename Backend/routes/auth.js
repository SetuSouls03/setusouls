const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/forgotpassword", authController.forgotPassword);
router.post("/verifyotp", authController.verifyOtp);
router.post("/resetpassword", authController.resetPassword);
//router.post("/write-sheet", authController.writeToSheet);

module.exports = router;
