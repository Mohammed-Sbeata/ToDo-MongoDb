const connection = require('../config/dbConnection');
const taskM = require('../model/task');

const addTaskQ = (Object)=>{
    connection()
    const todo = new taskM(Object)
    return todo.save();
}
module.exports = addTaskQ;