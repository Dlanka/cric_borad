const express = require("express");
const UserController = require("../controllers/user.controller");

const router = express.Router();
const userController = new UserController();

router.get("/", userController.getAll);
// router.post("/add", userController.create);

module.exports = router;
