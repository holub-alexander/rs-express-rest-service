const tasksRepo = require('../tasks/tasks.memory.repository');

const boards = [
  {
    id: '1',
    title: 'Board 1',
    columns: [],
  },
  {
    id: '2',
    title: 'Board 2',
    columns: [],
  },
];

const getAll = async () => boards;

const getBoard = async (boardId) => {
  const allBoards = await getAll();
  const board = allBoards.find((item) => item.id === boardId);

  return board;
};

const addBoard = async (board) => {
  boards.push(board);

  return board;
};

const updateBoard = async (boardId, data) => {
  const boardIndex = boards.map((user) => user.id).indexOf(boardId);
  let updatedBoard = null;

  if (boardIndex > -1) {
    boards[boardIndex] = {
      ...boards[boardIndex],
      ...data,
    };

    updatedBoard = boards[boardIndex];
  }

  return updatedBoard;
};

const deleteBoard = async (boardId) => {
  const boardIndex = boards.map((user) => user.id).indexOf(boardId);
  let isFound = false;

  if (boardIndex > -1) {
    boards.splice(boardIndex, 1);
    isFound = true;
  }

  return isFound;
};

module.exports = { 
  getAll, getBoard,  
  addBoard, updateBoard,
  deleteBoard,
};