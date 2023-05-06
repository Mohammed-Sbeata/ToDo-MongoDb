const addTask = require('../controllers/addTask');
const deleteTask = require('../controllers/deleteTask');
const editTask = require('../controllers/editTask');
const getTasks = require('../controllers/getTasks');

const router = require('express').Router();


router.post('/task', addTask);
router.get('/getTasks', getTasks);
router.delete('/task/remove/:taskId', deleteTask)
router.patch('/task/edit/:taskId', editTask)

module.exports = router;