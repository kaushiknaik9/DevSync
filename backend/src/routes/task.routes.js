const express = require("express");

const {
  gettasks,
  createtasks,
  updatetasks,
  deletetask,
} = require("../controllers/task.controller");
const protect = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/", protect, gettasks);
router.post("/", protect, createtasks);
router.patch("/:id", protect, updatetasks);
router.delete("/:id", protect, deletetask);

module.exports = router;
