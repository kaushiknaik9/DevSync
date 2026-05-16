const express = require("express");

const {
  gettasks,
  createtasks,
  updatetasks,
  deletetask,
} = require("../controllers/task.controller");
const protect = require("../middlewares/auth.middleware");
const authorized = require("../middlewares/role.middleware");

const router = express.Router();

router.get("/", protect, gettasks);
router.post("/", protect, createtasks);
router.patch("/:id", protect, updatetasks);
router.delete("/:id", protect, authorized("admin"), deletetask);

module.exports = router;
