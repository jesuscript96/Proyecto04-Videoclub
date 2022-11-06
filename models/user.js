// 'use strict';
// const {
//   Model
// } = require('sequelize');

const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/db");
// const Order = require('./order.js')
// const Role = require('./role.js')

class User extends Model {};

User.init({
    // Model attributes are defined here
    mail: {
      type: DataTypes.STRING,
      primaryKey: true,
      validate: {
          isEmail: true,
          len: [1, 100]
      },
      allowNull: false
    },
    birth_Date: DataTypes.DATE,
    password: {
      type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
        validate: {
            len: [1, 45]
        }
      },
  }, {
    sequelize, 
    modelName: 'users',
    freezeTableName: true,
    timestamps: false
  });


//   User.hasMany(Order, {
//     foreignKey: 'user'
// });
// User.belongsTo(Role, {
//     foreignKey: 'parent_id'
// });

  module.exports = User;