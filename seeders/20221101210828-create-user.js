'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('users', [
      {
      mail: "jesu@gmail.com",
      birth_Date: "1996-01-11",
      password: "eyyyyy",
      name: "jesus",
      roleIdRole: 1
    },
    {
      mail: "christian@gmail.com",
      birth_Date: "1996-01-12",
      password: "eyyyyy2",
      name: "christian",
      roleIdRole: 2
    },
    {
      mail: "marcos@gmail.com",
      birth_Date: "1996-01-12",
      password: "eyyyyy2",
      name: "marcos",
      roleIdRole: 2
    },
    {
      mail: "lucas@gmail.com",
      birth_Date: "1996-01-12",
      password: "eyyyyy2",
      name: "lucas",
      roleIdRole: 2
    },
    {
      mail: "rodrigo@gmail.com",
      birth_Date: "1996-01-12",
      password: "eyyyyy2",
      name: "rodrigo",
      roleIdRole: 2
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
