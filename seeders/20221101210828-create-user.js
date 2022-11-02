'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('users', [
      {
      mail: "jesu@gmail.com",
      birth_Date: "1996-01-11 13:00:00",
      password: "eyyyyy",
      name: "jesus",
      userRole: 1
    },
    {
      mail: "jesu2@gmail.com",
      birth_Date: "1996-01-12 13:00:00",
      password: "eyyyyy2",
      name: "jesus2",
      userRole: 2
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
