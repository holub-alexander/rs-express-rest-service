const router = require('express').Router();
const boardService = require('./boards.service');
const CreateError = require('../../common/createError');

router.route('/').get(async (req, res, next) => {
  try {
    const boards = await boardService.getAll();

    res.status(200);
    res.json(boards);
  } catch (err) {
    next(err);
  }
});

router.route('/:boardId').get(async (req, res, next) => {
  try {
    const board = await boardService.getBoard(req.params.boardId);
    
    if (board) {
      res.status(200);
      res.json(board);
    } else {
      throw new CreateError('Доска не найдена', 404);
    }
  } catch (err) {
    next(err);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const board = await boardService.addBoard(req.body);

    res.status(201);
    res.json(board);
  } catch (err) {
    next(err);
  }
});

router.route('/:boardId').put(async (req, res, next) => {
  try {
    const updatedBoard = await boardService.updateBoard(req.params.boardId, req.body);

    res.status(200);
    res.json(updatedBoard);
  } catch (err) {
    next(err);
  }
});

router.route('/:boardId').delete(async (req, res, next) => {
  try {
    const isFoundBoard = await boardService.deleteBoard(req.params.boardId);
    console.log(isFoundBoard);
    if (isFoundBoard) {
      res.status(200);
      res.send({ message: 'Доска успешно удалена' });
    } else {
      throw new CreateError('Доска не найдена', 404);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
