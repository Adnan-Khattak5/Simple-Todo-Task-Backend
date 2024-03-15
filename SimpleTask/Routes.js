// routes.js
const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.post('/tasks', controller.createTask);
router.get('/tasks', controller.getTasks);
router.patch('/tasks/:id', controller.updateTask);
router.delete('/tasks/:id', controller.deleteTask);
router.patch('/tasks/:id/category', controller.updateTaskCategory);
router.patch('/tasks/:id/priority', controller.updateTaskPriority);
router.patch('/tasks/:id/status', controller.updateTaskStatus);
router.get('/tasks/sorted', controller.viewTasks);

module.exports = router;
