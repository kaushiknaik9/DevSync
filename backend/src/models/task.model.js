const mongoose = require("mongoose");

const taskschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }, //createdAt, updatedAt this will be already added in the Schema
);

const Task = mongoose.model("Task", taskschema);

module.exports = Task;
