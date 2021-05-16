const tasks = [
  {
    id: '1',
    title: 'Board 1',
    order: 1,
    description: 'Task 1',
    userId: '1',
    boardId: '1',
    columnId: '1',
  },
  {
    id: '2',
    title: 'Board 2',
    order: 2,
    description: 'Task 2',
    userId: '2',
    boardId: '2',
    columnId: '2',
  },
];

const getAll = async (boardId) => tasks.filter((task) => task.boardId === boardId);

const getTask = async (boardId, taskId) => {
  const allBoards = await getAll(boardId);
  const board = allBoards.find((item) => item.id === taskId && item.boardId === boardId);

  return board;
};

const addTask = async (task) => {
  tasks.push(task);

  return task;
};

const updateTask = async (boardId, taskId, data) => {
  const taskIndex = tasks.map((task) => task.id).indexOf(taskId);
  let updatedTask = null;

  if (taskIndex > -1 && tasks[taskIndex].boardId === boardId) {
    tasks[taskIndex] = {
      ...tasks[taskIndex],
      ...data,
    };

    updatedTask = tasks[taskIndex];
  }

  return updatedTask;
};

const deleteTask = async (boardId, taskId) => {
  const taskIndex = tasks.findIndex((item) => taskId === item.id && boardId === item.boardId);
  let isFound = false;

  if (taskIndex > -1) {
    tasks.splice(taskIndex, 1);
    isFound = true;
  }

  return isFound;
};

module.exports = { 
  getAll,  getTask,
  addTask, updateTask,
  deleteTask,
};