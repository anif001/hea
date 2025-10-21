const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController");
// Routes
router.post('/addUser', userController.createUser);
router.get('/allUsers', userController.getUsers);
router.post('/loginUser',userController.loginInfo);

module.exports = router;
