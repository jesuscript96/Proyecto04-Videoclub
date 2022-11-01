const {DataTypes, Model } = require ("sequelize")

const sequelize = require ("../db/db")

class Serie extends Model {}

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
}, {
  sequelize, 
  modelName: 'series',
  freezeTableName: true,
  timestamps: false
});

module.exports = Serie