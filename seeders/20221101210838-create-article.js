'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('articles', [
      {
      id_article: 1
    },
    {
      id_article: 2
    },
    {
      id_article: 3
    },
    {
      id_article: 4
    },
    {
      id_article: 5
    },
    {
      id_article: 6
    },
    {
      id_article: 7
    },
    {
      id_article: 8
    },
    {
      id_article: 9
    },
    {
      id_article: 10
    },
    {
      id_article: 11
    },
    {
      id_article: 12
    },
    {
      id_article: 13
    },
    {
      id_article: 14
    },
    {
      id_article: 15
    },
    {
      id_article: 16
    },
    {
      id_article: 17
    },
    {
      id_article: 18
    },
    {
      id_article: 19
    },
    {
      id_article: 20
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
