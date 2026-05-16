const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");

const asyncHandler = require("../utils/asyncHandler");
const CustomError = require("../utils/customError");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new CustomError("User already Exists", 400);
  }

  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedpassword,
  });

  res.status(201).json({
    success: true,
    data: user,
    message: "User Registration Success",
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomError("User Does not exists", 400);
  }

  const passMatch = await bcrypt.compare(password, user.password);

  if (!passMatch) {
    throw new CustomError("Invalid Password", 400);
  }

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  res.status(200).json({
    success: true,
    message: "Login Success",
    token,
  });
});

module.exports = {
  registerUser,
  loginUser,
};
