const {DataTypes, Model } = require ("sequelize")

const sequelize = require ("../db/db")

class Role extends Model {
  static associate(models) {
    Role.hasMany(models.user, {
        foreignKey: 'id_role',
        as: 'userRole'
    })
}
}

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