const { Schema, model } = require("mongoose");

const todo = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    isCompleted: {
      type: Boolean,
    },
  },
  { versionKey: false, timestamps: true }
);
const Todo = model("todo", todo);

module.exports = Todo;
