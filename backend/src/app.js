const express = require("express");

const logger = require("./middlewares/logger.middleware.js");
const errorMiddleware = require("./middlewares/error.middleware.js");

const taskrouter = require("./routes/task.routes.js");
const authrouter = require("./routes/auth.routes.js");
const projectroutes = require("./routes/project.routes.js");

const app = express();

app.use(express.json());

app.use(logger);

app.use("/api/tasks", taskrouter);
app.use("/api/auth", authrouter);
app.use("/api/projects", projectroutes);

app.get("/", (req, res) => {
  res.send("Devsync app running");
});

app.use(errorMiddleware);

module.exports = app;
