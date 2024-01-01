// import userrepository.js
const userRepository = require("../repository/userrepository");

// create userservice
const userservice = {};

userservice.findAll = async () => {
  const users = await userRepository.findAll();
  return users;
};

userservice.findById = async (id) => {
  const user = await userRepository.findById(id);
  return user;
};

userservice.create = async (user) => {
  const newUser = await userRepository.save(user);
  return newUser;
};

userservice.update = async (id, user) => {
  const updatedUser = await userRepository.update(id, user);
  return updatedUser;
};

userservice.delete = async (id) => {
  const deletedUser = await userRepository.delete(id);
  return deletedUser;
};

// export userservice
module.exports = userservice;
