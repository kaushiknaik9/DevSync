const express = require("express");

const protect = require("../middlewares/auth.middleware");

const { createUser, getUser } = require("../controllers/project.controller");

router = express.Router();

router.get("/", protect, getUser);
router.post("/", protect, createUser);

module.exports = router;
