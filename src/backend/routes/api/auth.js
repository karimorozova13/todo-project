const { basedir } = global;

const { catchError } = require(`${basedir}/utils/helpers`);
const express = require("express");

const { auth } = require(`${basedir}/middlewares`);
const authCtrl = require(`${basedir}/controller/auth`);

const router = express.Router();

// signup
router.post("/register", catchError(authCtrl.register));
router.get("/current", auth, authCtrl.current);
router.get("/logout", auth, authCtrl.logout);

// signin
router.post("/login", authCtrl.login);

module.exports = router;
