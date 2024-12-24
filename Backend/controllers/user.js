const userModel = require("../models/user");
const blackListTokenModel = require("../models/blackListToken");
const { validationResult } = require("express-validator");
const { createUser } = require("../services/user");

const registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Return validation errors to the client
    return res.status(400).json({ errors: errors.array() });
  }
  const isUserAlreadyexists = await userModel.findOne({ email });
  if (isUserAlreadyexists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const { fullname, email, password } = req.body;
  console.log(fullname);
  
  const hashedPassword = await userModel.hashPassword(password);
  const user = await createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();
  res.status(201).json({ token, user });
};

const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Return validation errors to the client
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    res.status(400).json({ msg: "Invalid email or password" });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    res.status(400).json({ msg: "Invalid email or password" });
  }

  const token = user.generateAuthToken();
  res.cookie("token", token);
  res.json({ token, user });
};

const getUserProfile = (req, res) => {
  res.status(200).json(req.user);
};

const logoutUser = async (req, res) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.header("Authorization")?.split(" ")[1];
  await blackListTokenModel.create({ token });
  res.status(200).json({ msg: "Logged out successfully" });
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  logoutUser,
};
