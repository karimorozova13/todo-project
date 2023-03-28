const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: emailRegexp,
      required: true,
      isUnique: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    confirmPassword: {
      type: String,
      minlength: 6,
      required: true,
    },
    token: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);
const registerSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  userName: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const schemas = {
  register: registerSchema,
  login: loginSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
