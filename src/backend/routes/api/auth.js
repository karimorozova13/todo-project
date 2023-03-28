const { auth } = require("../../middlewares");
const express = require("express");
const authCtrl = require("../../controller/auth");

const router = express.Router();

// signup
router.post("/register", authCtrl.register);
router.get("/current", auth, authCtrl.current);
router.get("/logout", auth, authCtrl.logout);

// signin
router.post("/login", authCtrl.login);

module.exports = router;
