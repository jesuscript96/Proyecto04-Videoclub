'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("series", {
    id_serie: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING
    },
    genre: {
      type: Sequelize.STRING
    },
    minAge: {
      type: Sequelize.INTEGER
    },
    poster: {
      type: Sequelize.STRING
    },
    rating: {
      type: Sequelize.INTEGER
    },
    chapter: {
      type: Sequelize.BOOLEAN
    },
    theater: {
      type: Sequelize.BOOLEAN
    },
    id_article: {
        type: Sequelize.INTEGER,
        references: {
          model: "articles",
          key: "id_article"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
    }  
   });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

