const authorized = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.body)) {
      return res.status(403).json({
        success: false,
        message: "Access Denied",
      });
    }
    next();
  };
};

module.exports = authorized;
