// const config = require("../config/config.json");
const { Sequelize } = require("sequelize");
require('dotenv').config() 

const sequelize = new Sequelize (
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    { 
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: process.env.DB_DIALECT
    }
)

module.exports = sequelize