const express = require("express");
const router = express.Router();

const UserController = require('../controllers/UserControllers')

// CRUD READ all users
router.get('/' , UserController.getAllUsers)

// CRUD READ user
router.get('/id/:mail' , UserController.getUserById)

// CRUD CREATE User
router.post('/register' , UserController.postNewUser)

// CRUD Update User
router.put('/update/:mail' , UserController.updateUserById)

// CRUD delete User - solo el admin
router.delete('/delete/:mail' , UserController.deleteUserById)

module.exports = router