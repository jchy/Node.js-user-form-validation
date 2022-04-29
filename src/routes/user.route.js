const express = require('express');
const router = express.Router();
const validateUser = require('../utils/user.validate');

const { createNewUser, getAllUsers} = require("../controllers/user.controller");

console.log(validateUser)
router.post("/",...validateUser(),createNewUser);
router.get("/", getAllUsers);

module.exports = router;
