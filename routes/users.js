
const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

// POST METHODS
router.post('/create', userController.saveUser);
router.post('/getUsers', userController.getUserList);

module.exports = router;