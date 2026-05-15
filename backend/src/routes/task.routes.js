const express = require("express");
const {
  gettasks,
  createtasks,
  updatetasks,
  deletetask,
} = require("../controllers/task.controller");

const router = express.Router();

router.get("/", gettasks);
router.post("/", createtasks);
router.patch("/:id", updatetasks);
router.delete("/:id", deletetask);

module.exports = router;
