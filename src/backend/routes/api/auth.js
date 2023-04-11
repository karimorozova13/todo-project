const { basedir } = global;

const { catchError } = require(`${basedir}/utils/helpers`);
const express = require("express");

const { auth, upload } = require(`${basedir}/middlewares`);

const authCtrl = require(`${basedir}/controller/auth`);

const router = express.Router();

// signup
router.post("/register", catchError(authCtrl.register));
router.get("/current", auth, authCtrl.current);
router.get("/logout", auth, authCtrl.logout);

// signin
router.post("/login", authCtrl.login);
router.patch("/avatars", auth, upload.single("avatar"), authCtrl.addAvatar);

module.exports = router;
