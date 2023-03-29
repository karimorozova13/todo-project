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

module.exports = {
  Todo,
  schema: valideteSchema,
};
