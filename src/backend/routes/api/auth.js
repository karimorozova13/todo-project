const express = require("express");
const authCtrl = require("../../controller/auth");

const router = express.Router();

router.post("/register", authCtrl.register);

module.exports = router;
