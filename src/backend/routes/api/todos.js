const express = require("express");
const router = express.Router();

const { basedir } = global;
const ctrlTodo = require("../../controller/todoCtrl");
const { auth } = require(`${basedir}/middlewares/auth`);

router.get("/", auth, ctrlTodo.get);
router.get("/:id", auth, ctrlTodo.getById);
router.delete("/:id", auth, ctrlTodo.remove);
router.post("/", auth, ctrlTodo.add);
router.put("/:id", auth, ctrlTodo.update);

module.exports = router;
