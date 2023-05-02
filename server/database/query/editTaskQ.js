const mongoose = require('mongoose');
const connection = require('../config/dbConnection');
const taskM = require('../model/task')

const editTaskQ = ({taskId, newTask}) => {
    connection();
    return taskM.updateOne({_id: new mongoose.Types.ObjectId(taskId)}, {$set: newTask})
}
module.exports = editTaskQ;
