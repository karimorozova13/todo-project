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
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);
const valideteSchema = Joi.object({
  title: Joi.string().required(),
  isCompleted: Joi.boolean(),
});

const Todo = model("todo", todoShema);

const getAll = async (owner) => {
  return Todo.find({ owner }).populate(
    "owner",
    "firstName lastName userName email"
  );
};
const getTodo = async (id) => {
  return Todo.findOne({ _id: id });
};
const addTodo = async (req, res) => {
  const { id: owner } = req.user;
  return Todo.create({ ...req.body, owner });
};
const updateTodo = async (id, fields) => {
  return Todo.findByIdAndUpdate({ _id: id }, fields, { new: true });
};
const removeTodo = async (id) => {
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
