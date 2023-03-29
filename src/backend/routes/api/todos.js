const express = require("express");
const router = express.Router();

const { basedir } = global;

const { auth } = require(`${basedir}/middlewares/auth`);
const todoCtrl = require(`${basedir}/controller/todo`);

router.get("/", auth, todoCtrl.getAll);
router.get("/:id", auth, todoCtrl.getOne);
router.delete("/:id", auth, todoCtrl.remove);
router.post("/", auth, todoCtrl.add);
router.put("/:id", auth, todoCtrl.update);

module.exports = router;
