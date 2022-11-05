'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('orders', [
      {
      id_order: 1,
      startedAt: "2022-11-11",
      endedAt: "2022-12-12",
      userMail: "jesu@gmail.com",
      articleIdArticle: 1
    },
    {
      id_order: 2,
      startedAt: "2022-07-11",
      endedAt: "2022-07-12",
      userMail: "lucas@gmail.com",
      articleIdArticle: 2
    },
    {
      id_order: 3,
      startedAt: "2022-04-11",
      endedAt: "2022-04-12",
      userMail: "rodrigo@gmail.com",
      articleIdArticle: 6
    },
    {
      id_order: 4,
      startedAt: "2022-01-11",
      endedAt: "2022-01-12",
      userMail: "lucas@gmail.com",
      articleIdArticle: 7
    },
    {
      id_order: 5,
      startedAt: "2022-10-11",
      endedAt: "2022-10-12",
      userMail: "marcos@gmail.com",
      articleIdArticle: 5
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