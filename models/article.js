const {DataTypes, Model } = require ("sequelize")

const sequelize = require ("../db/db")

class Article extends Model {
  static associate(models) {
    Article.hasMany(models.order, {
        foreignKey: 'id_article',
        as: 'id_article'
    });
    Article.belongsTo(models.serie, {
        foreignKey: 'id_article',
        as: 'id_article'
    });
    Article.belongsTo(models.film, {
      foreignKey: 'id_article',
      as: 'id_article'
  });
}
}

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