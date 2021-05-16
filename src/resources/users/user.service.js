const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();

const getUser = async (userId) => {
  let res = await usersRepo.getUser(userId) ?? null;

  if (res) {
    res = User.toResponse(res);
  }

  return res;
}

const addUser = async (user) => User.toResponse(await usersRepo.addUser(new User(user)));

const updateUser = async (userId, data = {}) => {
  let updatedUser = await usersRepo.updateUser(userId, data);

  if (updatedUser) {
    updatedUser = User.toResponse(updatedUser);
  }

  return updatedUser;
};

const deleteUser = async (userId) => usersRepo.deleteUser(userId);

module.exports = { 
  getAll, getUser, 
  addUser, updateUser,
  deleteUser,
};
