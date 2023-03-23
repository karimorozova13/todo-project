const express = require("express");
const Joi = require("joi");
const router = express.Router();
const ctrlTodo = require("../../controller");

router.get("/", ctrlTodo.get);
router.get("/:id", ctrlTodo.getById);
router.delete("/:id", ctrlTodo.remove);
router.post("/", ctrlTodo.add);
router.put("/:id", ctrlTodo.update);

module.exports = router;
