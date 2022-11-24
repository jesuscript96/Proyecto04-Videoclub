'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('series', [
      {
      id_serie: 1,
      title: "Aida",
      genre: "Drama",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg",
      rating: 6,
      chapter: true,
      theater: false,
      id_article: 1
    },
    {
      id_serie: 2,
      title: "Los Serrano",
      genre: "Comedia",
      minAge: 8,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg",
      rating: 5,
      chapter: true,
      theater: false,
      id_article: 2
    },
    {
      id_serie: 3,
      title: "Los Soprano",
      genre: "Drama",
      minAge: 16,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg",
      rating: 8,
      chapter: false,
      theater: true,
      id_article: 3
    },
    {
      id_serie: 4,
      title: "Rick & Morty",
      genre: "Comedia",
      minAge: 16,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg",
      rating: 9,
      chapter: true,
      theater: false,
      id_article: 4
    },
    {
      id_serie: 5,
      title: "HIMYM",
      genre: "sitcom",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg",
      rating: 8,
      chapter: false,
      theater: true,
      id_article: 5
    },
    {
      id_serie: 6,
      title: "El internado",
      genre: "Miedo",
      minAge: 14,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg",
      rating: 6,
      chapter: false,
      theater: false,
      id_article: 6
    },
    {
      id_serie: 7,
      title: "Bob Esponja",
      genre: "infantil",
      minAge: 3,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg",
      rating: 7,
      chapter: true,
      theater: false,
      id_article: 7
    },
    {
      id_serie: 8,
      title: "El barco",
      genre: "Drama",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg",
      rating: 5,
      chapter: true,
      theater: true,
      id_article: 8
    },
    {
      id_serie: 9,
      title: "Padre de familia",
      genre: "Comedia",
      minAge: 16,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg",
      rating: 7,
      chapter: true,
      theater: false,
      id_article: 9
    },
    {
      id_serie: 10,
      title: "El Imperio Otomano",
      genre: "Historia",
      minAge: 6,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg",
      rating: 6,
      chapter: true,
      theater: true,
      id_article: 10
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