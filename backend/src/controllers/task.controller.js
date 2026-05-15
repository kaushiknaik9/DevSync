const gettasks = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Tasks are here",
  });
};

const createtasks = (req, res) => {
  console.log(req.body);
  res.status(201).json({
    success: true,
    message: `Following Task is being Created: ${req.body.message}`,
  });
};

const updatetasks = (req, res) => {
  task_id = req.params.id;
  res.status(201).json({
    success: true,
    message: `Task to update is with id: ${task_id}`,
  });
};

const deletetask = (req, res) => {
  task_id = req.params.id;
  res.status(201).json({
    success: true,
    message: `Task to delete is with id: ${task_id}`,
  });
};

module.exports = {
  gettasks,
  createtasks,
  updatetasks,
  deletetask,
};
