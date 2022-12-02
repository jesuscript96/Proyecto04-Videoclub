const config = require("../config/config.json");
require('dotenv').config() 
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize (
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USERNAME,
    process.env.MYSQL_PASSWORD,
    { 
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      dialect: process.env.MYSQL_DIALECT
    }
)

module.exports = sequelize