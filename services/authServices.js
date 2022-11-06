const User = require("../models/user");
const crypto = require("node:crypto");

function assertValidPasswordService(pass) {
    if (pass.length < 8) {
      throw new Error("Password must be at least 8 characters long");
    }
    // validate it has one lower case letter
    if (!pass.match(/[a-z]/)) {
      throw new Error("Password must have at least one lower case letter");
    }
    // validate it has one upper case letter
    if (!pass.match(/[A-Z]/)) {
      throw new Error("Password must have at least one upper case letter");
    }
    // validate it has one number
    if (!pass.match(/[0-9]/)) {
      throw new Error("Password must have at least one number");
    }
  };

async function assertEmailIsUniqueService(mail) {
  console.log(mail)
    // validate email is unique
    const user = await User.findOne({
      where: {mail: mail}
  });
    if (user) {
      throw new Error("Email is already registered");
    }
  };

async function createUserService(userBody) {
    delete userBody.role;
    const hash = encryptPassword(userBody.password);
    userBody.password = hash;
    const user = await User.create(userBody);
    return user;
  }

function assertEmailIsValid(mail) {
    // must validate a valid email
    const mailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return emailRegex.test(email);
    const isValid = mail.match(mailRegex);
    if (!isValid) {
      throw new Error("Email is invalid");
    }
  }

function encryptPassword(password) {
    const hash = crypto
      .createHmac("sha512", 'no salt for now // TODO: REALLY NEED TO ADD SALT?')
      .update(password)
      .digest("base64");
    return hash;
  }

async function isValidUserAndPassword(user, password) {
    const userFound = await User.findOne({
      where: {mail: mail}
  });
    if (userFound) {
      const hash = encryptPassword(password);
      return hash === userFound.password;
    }
    return false;
  }
  
module.exports = {
    assertValidPasswordService,
    assertEmailIsUniqueService,
    assertEmailIsValid,
    createUserService,
    isValidUserAndPassword,
    encryptPassword,
  };