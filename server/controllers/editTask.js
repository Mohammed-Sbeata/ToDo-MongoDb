const editTaskQ = require('../database/query/editTaskQ');

const  editTask = (req, res) => {
  const { taskId } = req.params;
  const newTask = req.body;
  editTaskQ({ taskId, newTask })
  .then((data) => {
    if(data.acknowledged){
      res.status(200).json({
        error: false,
        message: 'Successfully',
      });
    }else{
      throw new Error('Internal Server Error')
    }
  })
  .catch((error) => {
    console.log(error);
    res.status(500).json({
      error: false,
      message: 'Internal Server Error'
    })
  });
}
module.exports = editTask;