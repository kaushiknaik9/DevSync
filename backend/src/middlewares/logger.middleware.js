const loggermiddleware = (req, res, next) => {
  console.log(`Request type: ${req.method}\nURl: localhost:5000${req.url}`);

  next();
};

module.exports = loggermiddleware;
