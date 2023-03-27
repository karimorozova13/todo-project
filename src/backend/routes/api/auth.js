const express = require("express");
const authCtrl = require("../../controller/auth");

const router = express.Router();

// signup
router.post("/register", authCtrl.register);

// signin
router.post("/login", authCtrl.login);

module.exports = router;
