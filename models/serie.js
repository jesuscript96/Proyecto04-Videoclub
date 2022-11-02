// 'use strict';
// const {
//   Model
// } = require('sequelize');

const {DataTypes, Model } = require ("sequelize")

const sequelize = require ("../db/db")

class Serie extends Model {
  static associate(models) {
    Serie.hasOne(models.article, {
        foreignKey: 'id_article',
        as: 'id_article'
    })
}
}

Serie.init({
  id_serie: {
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
  rating: {
    type: DataTypes.INTEGER
  },
  chapter: {
    type: DataTypes.BOOLEAN
  },
  theater: {
    type: DataTypes.BOOLEAN
  }
}, {
  sequelize, 
  modelName: 'series',
  freezeTableName: true,
  timestamps: false
});

module.exports = Serie