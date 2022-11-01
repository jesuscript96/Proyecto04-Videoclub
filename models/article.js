const {DataTypes, Model } = require ("sequelize")

const sequelize = require ("../db/db")

class Article extends Model {}

Article.init({
  id_article: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  }
}, {
  sequelize, 
  modelName: 'articles',
  freezeTableName: true,
  timestamps: false
  });

module.exports = Article