const express = require("express");
const router = express.Router();
const ctrlTodo = require("../../controller/todoCtrl");

router.get("/", ctrlTodo.get);
router.get("/:id", ctrlTodo.getById);
router.delete("/:id", ctrlTodo.remove);
router.post("/", ctrlTodo.add);
router.put("/:id", ctrlTodo.update);

module.exports = router;
