// 'use strict';
// const {
//   Model
// } = require('sequelize');

const {DataTypes, Model } = require ("sequelize")

const sequelize = require ("../db/db")
// const User = require('./user.js')
// const Article = require('./article.js')

class Order extends Model {}

Order.init({
  id_order: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  startedAt: {
    type: DataTypes.DATEONLY
  },
  endedAt: {
    type: DataTypes.DATEONLY
  },
}, {
  sequelize, 
  modelName: 'orders',
  freezeTableName: true,
  timestamps: false
});

//   Order.belongsTo(User, {
//     foreignKey: 'user'
    
// })
//   Order.belongsTo(Article, {
//       foreignKey: 'id_article'
//   })


module.exports = Order