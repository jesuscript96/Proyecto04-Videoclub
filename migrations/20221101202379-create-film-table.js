'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("films", {
    id_film: {
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
    rating: {
      type: Sequelize.INTEGER
    },
    poster: {
      type: Sequelize.STRING
    },
    sinopsis: {
      type: Sequelize.TEXT
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
