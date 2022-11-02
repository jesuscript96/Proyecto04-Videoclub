const express = require("express");
const router = express.Router();

const UserController = require('../controllers/UserControllers')

// CRUD READ all users
router.get('/' , UserController.getAllUsers)

// CRUD READ user
router.get('/:id' , UserController.getUserById)

// CRUD CREATE User
router.post('/register' , UserController.postNewUser)

// CRUD Update User
router.update('/update/:id' , UserController.updateUserById)

// CRUD delete User - solo el admin
router.delete('/delete/:id' , UserController.deleteUserById)