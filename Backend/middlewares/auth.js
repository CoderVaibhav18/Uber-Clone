const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const blackListTokenModel = require("../models/blackListToken");
const captainModel = require("../models/captain");
const userModel = require("../models/user");

const authUser = async (req, res, next) => {
  // Get token from cookies or Authorization header
  const token = req.cookies.token || req.header("Authorization")?.split(" ")[1];

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  const isBlackListed = await blackListTokenModel.findOne({ token: token });

  if (isBlackListed) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // Fetch user from the database
    const user = await userModel.findById(decoded._id);

    // Check if user exists
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Attach user to request object
    req.user = user;

    // Proceed to the next middleware
    next();
  } catch (error) {
    // Handle token verification or other errors
    console.error("Authentication error:", error);
    res.status(401).json({ msg: "Unauthorized" });
  }
};

const authCaptain = async (req, res, next) => {
  // Get token from cookies or Authorization header
  const token = req.cookies.token || req.header("Authorization")?.split(" ")[1];

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  const isBlackListed = await blackListTokenModel.findOne({ token: token });

  if (isBlackListed) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const captain = await captainModel.findById(decoded._id);

    if (!captain) {
      return res.status(404).json({ msg: "Captain not found" });
    }

    req.captain = captain;
    return next();
  } catch (error) {
    console.log(err);
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = {
  authUser,
  authCaptain,
};
