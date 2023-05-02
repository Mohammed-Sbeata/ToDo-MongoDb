const deleteTaskQ = require('../database/query/deleteTaskQ');

const deleteTask = (req, res) => {
  const taskId = req.params;
  deleteTaskQ(taskId)
  .then((data) => {
    if (data.acknowledged) {
      res.status(200).json({
        error:false,
        message: 'Successfully'
      });
    }else{
      throw new Error('error')
    }
  })
  .catch((error) => {
    console.log(error);
    res.status(500).json({
      error: true,
      message: 'internal server error',
    });
  })
}

module.exports = deleteTask;