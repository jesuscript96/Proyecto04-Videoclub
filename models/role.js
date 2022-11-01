const {DataTypes, Model } = require ("sequelize")

const sequelize = require ("../db/db")

class Role extends Model {}

Role.init({
  id_role: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
 role_name: {
    type: DataTypes.STRING
  }
}, {
  sequelize, 
  modelName: 'roles',
  freezeTableName: true,
  timestamps: false
  });

module.exports = Role