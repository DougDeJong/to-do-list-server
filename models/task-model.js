// models/task-model.js

const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const Project = require('./project-model');

const taskSchema = new Schema({
  title: String,
  description: String,
  project: {type: Schema.Types.ObjectId}
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;