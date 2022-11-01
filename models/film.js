const {DataTypes, Model } = require ("sequelize")

const sequelize = require ("../db/db")

class Film extends Model {}

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
}, {
  sequelize, 
  modelName: 'films',
  freezeTableName: true,
  timestamps: false
});

module.exports = Film