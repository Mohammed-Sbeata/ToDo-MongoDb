const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: String
});
const taskM = mongoose.model('tasks', taskSchema);
module.exports = taskM;