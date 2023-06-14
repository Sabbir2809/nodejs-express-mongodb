// Dependencies
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('public/data.json', 'utf-8'));
const users = data.users;

//@description: Create User
//@route: POST - /api/v1/user
exports.createUser = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.status(201).json(req.body);
};

//@description: Get All User
//@route: GET - /api/v1/user
exports.getAllUsers = (req, res) => {
  res.json(users);
};

//@description: Get Single User
//@route: GET - /api/v1/user/:id
exports.getUser = (req, res) => {
  const id = +req.params.id;
  const user = users.find((p) => p.id === id);
  res.json(user);
};

//@description: Get Update User
//@route: PUT - /api/v1/user/:Id
exports.replaceUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  users.splice(userIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};

//@description: Get Update User
//@route: PATCH - /api/v1/user/:Id
exports.updateUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1, { ...user, ...req.body });
  res.status(201).json();
};

//@description: Get Delete User
//@route: DELETE - /api/v1/user/:Id
exports.deleteUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1);
  res.status(201).json(user);
};
