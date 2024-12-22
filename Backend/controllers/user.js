const userModel = require("../models/user");
const { validationResult } = require("express-validator");
const { createUser } = require("../services/user");

const registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Return validation errors to the client
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;
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
  console.log(password);
  
  const user = await userModel.findOne({ email }).select('+password');

  if (!user) {
    res.status(400).json({ msg: "Invalid email or password" });
  }
  console.log(user);
  

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    res.status(400).json({ msg: "Invalid email or password" });
  }

  const token = user.generateAuthToken();
  return res.json({ token, user });
};

module.exports = {
  registerUser,
  loginUser,
};
