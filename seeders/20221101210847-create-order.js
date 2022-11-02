'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('orders', [
      {
      id_order: 1,
      startedAt: "2022-11-11 13:00:00",
      endedAt: "2022-12-12 13:00:00",
      user: "jesu@gmail.com",
      article: 1
    },
    {
      id_order: 2,
      startedAt: "2022-11-11 13:00:00",
      endedAt: "2022-12-12 13:00:00",
      user: "jesu2@gmail.com",
      article: 2
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