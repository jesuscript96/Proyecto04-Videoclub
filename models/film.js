// 'use strict';
// const {
//   Model
// } = require('sequelize');

const {DataTypes, Model } = require ("sequelize")

const sequelize = require ("../db/db")

class Film extends Model {
  static associate(models) {
  //   Film.hasOne(models.article, {
  //     foreignKey: 'id_article',
  //     as: 'id_article'
  // });
}
}

Film.init({
  id_film: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING
  },
  genre: {
    type: DataTypes.STRING
  },
  minAge: {
    type: DataTypes.INTEGER
  },
  poster: {
    type: DataTypes.STRING,
   len: [1, 300],
     },
  rating: {
    type: DataTypes.INTEGER
  },
  sinopsis: {
    type: DataTypes.TEXT
  }
}, {
  sequelize, 
  modelName: 'films',
  freezeTableName: true,
  timestamps: false
});

module.exports = Film