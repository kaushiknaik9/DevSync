const errorMiddleware = (err, req, res, next) => {
  const statuscode = err.statuscode || 500;

  const message = err.message || "Server Error";

  res.status(statuscode).json({
    success: false,
    message,
  });
};

module.exports = errorMiddleware;
