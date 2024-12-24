const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile,
  logoutUser,
} = require("../controllers/user");
const { body } = require("express-validator");
const { authUser } = require("../middlewares/auth");

// User registration
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be atleast 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  registerUser
);

// User Login
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 characters or greater"),
  ],
  loginUser
);

// User Profile
router.get("/profile", authUser, getUserProfile);

// User logout
router.get("/logout", authUser, logoutUser);

module.exports = router;
