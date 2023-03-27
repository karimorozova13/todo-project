const { Schema, model } = require("mongoose");
const Joi = require("joi");

const todoShema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);
const valideteSchema = Joi.object({
  title: Joi.string().required(),
  isCompleted: Joi.boolean(),
});

const Todo = model("todo", todoShema);

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
  valideteSchema,
};
