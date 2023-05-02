const getTasksQ = require('../database/query/getTasksQ');

const getTasks = (req, res) => {
  getTasksQ()
  .then((tasks) => {
      res.status(200).json({
        error:false,
        data: tasks
      });
    
  })
  .catch((error) => {
    console.log(error);
    res.status(500).json({
      error:false,
      message: 'internal server error'
    })
  })
}

module.exports = getTasks; 