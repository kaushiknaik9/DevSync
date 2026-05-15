const { Timestamp } = require("mongodb");
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
  },
  {
    timestamps: true,
  }, //createdAt, updatedAt this will be already added in the Schema
);

const Task = mongoose.model("Task", taskschema);

module.exports = Task;
