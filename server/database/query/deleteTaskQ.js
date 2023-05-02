const mongoose = require('mongoose')
const connection = require('../config/dbConnection');
const taskM = require('../model/task');

const deleteTaskQ = (id)=>{
    const {taskId} = id;
    connection();
    return taskM.deleteOne({_id: new mongoose.Types.ObjectId(taskId)})
}
module.exports = deleteTaskQ;
