const router = require('express').Router();
const taskService = require('./tasks.service');
const CreateError = require('../../common/createError');

router.route('/boards/:boardId/tasks').get(async (req, res, next) => {
  try {
    const tasks = await taskService.getAll(req.params.boardId);

    res.status(200);
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

router.route('/boards/:boardId/tasks/:taskId').get(async (req, res, next) => {
  try {
    const board = await taskService.getTask(req.params.boardId, req.params.taskId);

    res.status(200);
    res.json(board);
  } catch (err) {
    next(err);
  }
});

router.route('/boards/:boardId/tasks').post(async (req, res, next) => {
  try {
    const task = await taskService.addTask(req.params.boardId, req.body);

    res.status(201);
    res.json(task);
  } catch (err) {
    next(err);
  }
});

router.route('/boards/:boardId/tasks/:taskId').put(async (req, res, next) => {
  try {
    const updatedTask = await taskService.updateTask(
      req.params.boardId, 
      req.params.taskId, 
      req.body
    );

    res.status(200);
    res.json(updatedTask);
  } catch (err) {
    next(err);
  }
});

router.route('/boards/:boardId/tasks/:taskId').delete(async (req, res, next) => {
  try {
    const isFoundBoard = await taskService.deleteTask(req.params.boardId, req.params.taskId);
    console.log('rhhdfhdf', isFoundBoard);

    if (isFoundBoard) {
      res.status(200);
      res.send({ message: 'Таск успешно удален' });
    } else {
      throw new CreateError('Таск не найден', 404);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
