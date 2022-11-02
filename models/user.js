const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/db");

class User extends Model {
  static associate(models) {
    User.hasMany(models.order, {
        foreignKey: 'mail',
        as: 'user'
    });
    User.belongsTo(models.Folder, {
        foreignKey: 'parent_id',
        as: 'userRole'
    });
}
};

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
    birth_Date: {
      type: DataTypes.DATE
    },
    password: {
      type: DataTypes.STRING,
      validate: {
          len: [1, 45]
      }
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

  module.exports = User;