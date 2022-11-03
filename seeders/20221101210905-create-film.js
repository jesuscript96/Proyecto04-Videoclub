'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('films', [
      {
      id_film: 1,
      title: "Shrek",
      genre: "Comedia",
      minAge: 12,
      id_article: 11,
      rating: 1
    },
    {
      id_film: 2,
      title: "Los Increibles",
      genre: "Infantil",
      minAge: 12,
      id_article: 12,
      rating: 2
    },
    {
      id_film: 3,
      title: "Batman",
      genre: "Accion",
      minAge: 12,
      id_article: 13,
      rating: 3
    },
    {
      id_film: 4,
      title: "Origen",
      genre: "Ciencia ficcion",
      minAge: 12,
      id_article: 14,
      rating: 4
    },
    {
      id_film: 5,
      title: "Up",
      genre: "Infantil",
      minAge: 12,
      id_article: 15,
      rating: 5
    },
    {
      id_film: 6,
      title: "Transporter",
      genre: "Accion",
      minAge: 12,
      id_article: 16,
      rating: 6
    },
    {
      id_film: 7,
      title: "Seven",
      genre: "Accion",
      minAge: 12,
      id_article: 17,
      rating: 7
    },
    {
      id_film: 8,
      title: "El Francotirador",
      genre: "Accion",
      minAge: 12,
      id_article: 18,
      rating: 8
    },
    {
      id_film: 9,
      title: "Sharknado",
      genre: "Comedia",
      minAge: 12,
      id_article: 19,
      rating: 9
    },
    {
      id_film: 10,
      title: "The One",
      genre: "Comedia",
      minAge: 12,
      id_article: 20,
      rating: 10
    }
  ], {});
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};