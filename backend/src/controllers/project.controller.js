const Project = require("../models/projects.model");
const Projects = require("../models/projects.model");
const AsyncHandler = require("../utils/asyncHandler");

const createUser = AsyncHandler(async (req, res) => {
  const project = await Projects.create({
    ...req.body,
    owner: req.body.id,
    members: [req.body.id],
  });

  res.status(201).json({
    success: true,
    message: "User Created",
    data: project,
  });
});

const getUser = AsyncHandler(async (req, res) => {
  const project = await Project.find()
    .populate("owner", "name email")
    .populate("member", "name email");

  res.status(201).json({
    success: true,
    message: "Users ",
    data: project,
  });
});

module.exports = { createUser, getUser };
