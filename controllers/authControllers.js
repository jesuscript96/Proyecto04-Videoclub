const User = require("../models/user");

const {
    assertValidPasswordService,
    assertEmailIsUniqueService,
    assertEmailIsValid,
    createUserService,
    encryptPassword,
  } = require("../services/authServices")

const jsonwebtoken = require ("jsonwebtoken"); 

async function authRegisterController(req, res) {

    const body = req.body;
    console.log("soy el req body: ", req.body)

    try {
      assertValidPasswordService(body.password);
    } catch (error) {
      console.error(error);
      
      res.status(400).json({ message: "Invalid password: " + error.message });
      return;
    }
    // validate email is valid
    try {
      assertEmailIsValid(body.mail);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Email is invalid: " + error.message });
      return;
    }
    // validate email is unique
    try {
      await assertEmailIsUniqueService(body.mail);
    } catch (error) {
      console.error(error);
      res.status(400).json({
        message: "Email is already registered: " + error.message,
      });
      return;
    }
    // save user
    try {
      const userCreated = await createUserService(body);
      delete userCreated.password;
      console.log(body)
    //   delete userCreated._id;
      res.status(201).json(userCreated);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  async function authLoginController(req, res) {
    

    try {
      const { mail, password } = req.body;
      console.log(req.body)
    const userFound = await User.findOne({where :{ mail: mail }});
    if (!userFound) {
      res.status(401).json({ message: "Password or email is incorrect" });
      return;
    }
    const hashedPassword = encryptPassword(password);
    if (hashedPassword !== userFound.password) {
      res.status(401).json({ message: "Password or email is incorrect" });
      return;
    }
  
    const secret = process.env.JWT_SECRET || '';
  
    if (secret.length < 10) {
      throw new Error("JWT_SECRET is not set");
    }
  
    const jwt = jsonwebtoken.sign({
    //   uuid: userFound.uuid,
      mail: userFound.mail,
      created: Date.now(),
      role: userFound.roleIdRole,
    }, secret);
  
    res.status(200).json({
      message: "Login successful",
      jwt: jwt,
      role: userFound.roleIdRole,
      mail: userFound.mail
    });
    } catch (error) {
      console.error(error);
      
    }
  }

  module.exports = {
    authLoginController,
    authRegisterController,
  };