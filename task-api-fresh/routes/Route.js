const express = require('express');
const router = express.Router();
const { getAllTasks, getOneTask, createTask, updateTask, deleteTask } = require('../controllers/controller');

router.get('/tasks', getAllTasks);
router.get('/tasks/:id', getOneTask);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;