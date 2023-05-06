const addTaskQ = require('../database/query/addTaskQ');

const addTask = (req, res, next) => {
  const task = req.body

  addTaskQ(task)
    .then((result) => {
      res.status(201).json({
        error: false,
        data: result 
      });
    }).catch((error) => {
      console.log(error);
      res.status(500).json({
        error: true,
        message: 'internal server error'
      });
    })
}

module.exports = addTask;