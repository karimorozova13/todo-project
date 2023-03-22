const express = require("express");
const todoList = require("../../../data/todoList");

const router = express.Router;
console.log(router.get);

router.get("/", (req, res) => {
  //   res.json(todoList);
  console.log(33);
});

module.exports = router;
