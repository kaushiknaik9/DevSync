const Tasks = require("../models/task.model");

const gettasks = async (req, res) => {
  const tasks = await Tasks.find();
  res.status(200).json({
    success: true,
    message: tasks,
  });
};

const createtasks = async (req, res) => {
  const task = await Tasks.create(req.body);
  res.status(201).json({
    success: true,
    message: task,
  });
};

const updatetasks = async (req, res) => {
  const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(201).json({
    success: true,
    message: task,
  });
};

const deletetask = async (req, res) => {
  const task = await Tasks.findByIdAndDelete(req.params.id);
  res.status(204).json({
    success: true,
    message: task,
  });
};

module.exports = {
  gettasks,
  createtasks,
  updatetasks,
  deletetask,
};
