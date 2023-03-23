const Todo = require("./schemas/todo");

const getAll = async () => {
  return Todo.find();
};

const getTodo = (id) => {
  return Todo.findOne({ _id: id });
};

const addTodo = ({ title, isCompleted }) => {
  return Todo.create({ title, isCompleted });
};

const updateTodo = (id, fields) => {
  return Todo.findByIdAndUpdate({ _id: id }, fields, { new: true });
};

const removeTodo = (id) => {
  return Todo.findByIdAndRemove({ _id: id });
};

module.exports = {
  getAll,
  getTodo,
  addTodo,
  updateTodo,
  removeTodo,
};
