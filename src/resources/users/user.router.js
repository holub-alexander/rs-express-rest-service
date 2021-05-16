const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res, next) => {
  try {
    const users = await usersService.getAll();

    res.status(200);
    res.json(users.map(User.toResponse));
  } catch (err) {
    next(err);
  }
});

router.route('/:userId').get(async (req, res, next) => {
  try {
    const user = await usersService.getUser(req.params.userId);

    res.status(200);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const user = await usersService.addUser(req.body);

    res.status(201);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.route('/:userId').put(async (req, res, next) => {
  try {
    const updatedUser = await usersService.updateUser(req.params.userId, req.body);

    res.status(200);
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
});

router.route('/:userId').delete(async (req, res, next) => {
  try {
    await usersService.deleteUser(req.params.userId);

    res.status(200);
    res.send({ message: 'Success delete' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
