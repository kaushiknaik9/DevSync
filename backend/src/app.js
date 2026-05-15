const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Devsync app running");
});

module.exports = app;
