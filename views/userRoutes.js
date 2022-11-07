const express = require("express");
const router = express.Router();

const { isValidRoleAdmin, authBearerMiddleware, isValidUser } = require("../middlewares/authMiddleware")

const UserController = require('../controllers/UserControllers')

// CRUD READ all users
router.get('/', authBearerMiddleware, isValidRoleAdmin, UserController.getAllUsers)

// CRUD READ user
router.get('/id/:mail', authBearerMiddleware, isValidUser, UserController.getUserById)

// CRUD Update User
router.put('/update/:mail', authBearerMiddleware, isValidUser, UserController.updateUserById)

// CRUD delete User - solo el admin
router.delete('/delete/:mail' , authBearerMiddleware, isValidRoleAdmin, UserController.deleteUserById)

module.exports = router

// // CRUD CREATE User
// router.post('/register' , UserController.postNewUser)