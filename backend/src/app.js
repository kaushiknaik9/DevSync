const express = require("express");
const taskrouter = require("./routes/task.routes.js");
const logger = require("./middlewares/logger.middleware.js");

const app = express();

app.use(express.json());

app.use(logger);

app.use("/api/tasks", taskrouter);

app.get("/", (req, res) => {
  res.send("Devsync app running");
});

module.exports = app;
