const boardsRepo = require('./boards.memory.repository');
const Board = require('./boards.model');

const getAll = () => boardsRepo.getAll();

const getBoard = async (boardId) => {
  const board = await boardsRepo.getBoard(boardId) ?? null;
  return board;
}

const addBoard = async (board) => {
  const newBoard = await boardsRepo.addBoard(new Board(board));
  return newBoard;
}

const updateBoard = async (boardId, data = {}) => {
  const updatedBoard = await boardsRepo.updateBoard(boardId, data);
  return updatedBoard;
};

const deleteBoard = async (boardId) => boardsRepo.deleteBoard(boardId);

module.exports = { 
  getAll, getBoard, 
  addBoard, updateBoard,
  deleteBoard,
};
