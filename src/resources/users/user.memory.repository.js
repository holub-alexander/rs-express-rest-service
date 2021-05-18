const users = [
  {
    id: '1',
    name: 'Василий',
    login: 'vasily',
    password: '123',
  },
  {
    id: '2',
    name: 'Николай',
    login: 'nikolay',
    password: '123',
  },
];

const getAll = async () => users;

const getUser = async (userId) => {
  const allUsers = await getAll();
  const user = allUsers.find((item) => item.id === userId);

  return user;
};

const addUser = async (user) => {
  users.push(user);

  return user;
};

const updateUser = async (userId, data) => {
  const userIndex = users.map((user) => user.id).indexOf(userId);
  let updatedUser = null;

  if (userIndex > -1) {
    users[userIndex] = {
      ...users[userIndex],
      ...data,
    };

    updatedUser = users[userIndex];
  }

  return updatedUser;
};

const deleteUser = async (userId) => {
  const userIndex = users.map((user) => user.id).indexOf(userId);

  if (userIndex > -1) {
    users.splice(userIndex, 1);
  }
};

module.exports = { 
  getAll, getUser, 
  addUser, updateUser,
  deleteUser,
};