const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "No JWT tokens provided",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    req.user = decoded;
    console.log("REQ USER:", req.user);
    console.log("REQ USER:", typeof req.user);
    console.log(req.headers.authorization);

    next();
  } catch (e) {
    res.status(401).json({
      success: false,
      message: "Invalid Token or server issue",
    });
  }
};

module.exports = protect;
