const express = require("express");
const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const Joi = require("joi");

const listPath = "data/todoList.json";
const router = express.Router();

const UpdateSchema = Joi.object({
  title: Joi.string().required(),
  isCompleted: Joi.boolean().required(),
});
const CreateSchema = Joi.object({
  title: Joi.string().required(),
});
const IdSchema = Joi.object({
  id: Joi.string().required(),
});

router.get("/", async (req, res) => {
  const todoList = await fs.readFile(listPath);
  res.status(200).json(JSON.parse(todoList));
});
router.get("/:id", async (req, res) => {
  const { value, error } = IdSchema.validate(req.params);
  if (error) {
    return res.status(400).json("Something went wrong");
  }

  const list = await fs.readFile(listPath);
  const todo = JSON.parse(list).find((item) => item.id.toString() === value.id);
  res.status(200).json(todo);
});
router.put("/:id", async (req, res) => {
  const { value, error } = UpdateSchema.validate(req.body);
  if (error) {
    return res.status(400).json("Something went wrong");
  }

  const list = await fs.readFile(listPath);
  let todo = {};
  const updatedList = JSON.parse(list).map((item) => {
    if (item.id.toString() === req.params.id) {
      item.title = value.title;
      item.isCompleted = value.isCompleted;
      todo = item;
      return item;
    }
    return item;
  });
  await fs.writeFile(listPath, JSON.stringify(updatedList, null, 2));
  res.status(200).json(todo);
});
router.delete("/:id", async (req, res) => {
  const { value, error } = IdSchema.validate(req.params);
  if (error) {
    return res.status(400).json("Something went wrong");
  }
  const list = await fs.readFile(listPath);
  let todo = {};
  const updatedList = JSON.parse(list).filter((item) => {
    if (item.id.toString() === value.id) {
      todo = item;
      return false;
    }
    return true;
  });

  await fs.writeFile(listPath, JSON.stringify(updatedList, null, 2));
  res.status(200).json(todo);
});
router.post("/", async (req, res) => {
  const { value, error } = CreateSchema.validate(req.body);
  if (error) {
    return res.status(400).json("Something went wrong");
  }
  const list = await fs.readFile(listPath);
  const todo = {
    title: value.title,
    isCompleted: false,
    id: nanoid(),
  };
  const updatedList = JSON.parse(list);
  updatedList.push(todo);
  await fs.writeFile(listPath, JSON.stringify(updatedList, null, 2));
  res.status(200).json(todo);
});

module.exports = router;
