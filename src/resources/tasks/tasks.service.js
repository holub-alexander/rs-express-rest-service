const tasksRepo = require('./tasks.memory.repository');
const Task = require('./tasks.model');

const getAll = (boardId) => tasksRepo.getAll(boardId);

const getTask = async (boardId, taskId) => {
  const task = await tasksRepo.getTask(boardId, taskId);
  return task;
}

const addTask = async (boardId, data) => {
  const { title, order, description, userId, columnId } = data;
  const newTask = await tasksRepo.addTask(
    new Task({
      title,
      order,
      description,
      userId,
      columnId,
      boardId,
    })
  );

  return newTask;
}

const updateTask = async (boardId, taskId, data = {}) => {
  const updatedTask = await tasksRepo.updateTask(boardId, taskId, data);
  return updatedTask;
};

const deleteTask = async (boardId, taskId) => tasksRepo.deleteTask(boardId, taskId);

module.exports = { 
  getAll, getTask,
  addTask, updateTask,
  deleteTask,
};
