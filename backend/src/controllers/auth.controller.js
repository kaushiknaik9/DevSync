const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already Exists",
      });
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
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: `error here during auth!! ${e.message}`,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: true,
        message: "Invalid Email",
      });
    }

    const passMatch = bcrypt.compare(password, user.password);
    if (!passMatch) {
      return res.status.json({
        success: false,
        message: "Invalid Password",
      });
    }

    res.status(200).json({
      success: true,
      message: "Login Success",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Server Error in Auth.Controller",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
