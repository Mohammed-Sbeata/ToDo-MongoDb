const mongoose = require('mongoose');
const connection = require('../config/dbConnection');
const taskM = require('../model/task')

const editTaskQ = ({taskId, task}) => {
    connection();
    return taskM.updateOne({_id: new mongoose.Types.ObjectId(taskId)}, {$set: {task}})
}
module.exports = editTaskQ;
