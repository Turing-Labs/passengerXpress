const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require('../controllers/user')


router.get("/login", userController.loginUser);



module.exports = router;