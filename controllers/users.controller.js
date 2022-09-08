const getUsers = (req, res) => {
  res.status(200).send("Get All Users");
};

const getUser = (req, res) => {
  res.status(200).send("Get a User");
};

const createUser = (req, res) => {
  res.status(201).send("Create user");
};

const updateUser = (req, res) => {
  res.status(200).send("Update user");
};

const deleteUser = (req, res) => {
  res.status(200).send("Delete user");
};

module.exports = { createUser, deleteUser, getUser, getUsers, updateUser };
