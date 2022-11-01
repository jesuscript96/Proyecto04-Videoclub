const {DataTypes, Model } = require ("sequelize")

const sequelize = require ("../db/db")

class Order extends Model {}

Order.init({
  id_order: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  startedAt: {
    type: DataTypes.DATE
  },
  endedAt: {
    type: DataTypes.DATE
  },
}, {
  sequelize, 
  modelName: 'orders',
  freezeTableName: true,
  timestamps: false
});

module.exports = Order