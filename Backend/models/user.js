const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "Fisrt name must be atleast 3 characters"],
    },
    lastname: {
      type: String,
      required: true,
      minlength: [3, "Last name must be atleast 3 characters"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Email must be atleast 5 characters"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = () => {
  const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
  return token;
};

userSchema.methods.comparePassword = async (password) => {
  const compPassword = await bcrypt.compare(password, this.password);
  return compPassword;
};

userSchema.statics.hashPassword = async (password) => {
  const hashPassword = await bcrypt.hash(password, 10);
  return hashPassword;
};

const userModel = mongoose.model("user", userSchema);

module.exports =  userModel ;
