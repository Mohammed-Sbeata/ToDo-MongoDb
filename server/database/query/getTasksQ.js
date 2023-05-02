const connection = require('../config/dbConnection')
const taskM = require('../model/task')
const getTasksQ = () => {
  connection()
  return taskM.find()

}

module.exports = getTasksQ;