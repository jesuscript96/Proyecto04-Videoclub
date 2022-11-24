const express = require("express");
const authRouter = express.Router();


const {
    authLoginController,
    authRegisterController,
} = require("../controllers/authControllers.js");

// const {corsMiddleware} = require ("../middlewares/corsMiddleware")


authRouter.post("/login", authLoginController);
authRouter.post("/register", authRegisterController);

module.exports = authRouter;