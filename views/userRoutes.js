const express = require("express");
const router = express.Router();

const { isValidRoleAdmin, authBearerMiddleware, isValidUser } = require("../middlewares/authMiddleware")

const UserController = require('../controllers/UserControllers')

// CRUD READ all users
// router.get('/', authBearerMiddleware, isValidRoleAdmin, UserController.getAllUsers)
router.get('/', UserController.getAllUsers)

// CRUD READ user
// router.get('/id/:mail', authBearerMiddleware, isValidUser, UserController.getUserById)
router.get('/id/:mail', UserController.getUserById)

// CRUD Update User
// router.put('/update/:mail', authBearerMiddleware, isValidUser, UserController.updateUserById)
router.put('/update/:mail', UserController.updateUserById)

// CRUD delete User - solo el admin
// router.delete('/delete/:mail' , authBearerMiddleware, isValidRoleAdmin, UserController.deleteUserById)
router.delete('/delete/:mail' , UserController.deleteUserById)

module.exports = router

// // CRUD CREATE User
// router.post('/register' , UserController.postNewUser)