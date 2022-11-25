'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('users', [
      {
      mail: "prueba@prueba.com",
      birth_Date: "1996-01-11",
      password: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYWlsIjoicHJ1ZWJhQHBydWViYS5jb20iLCJjcmVhdGVkIjoxNjY5MzIxOTY1MDgzLCJyb2xlIjpudWxsLCJpYXQiOjE2NjkzMjE5NjV9.0tjohjU4gE2HBljk9fdKnmYKnLVlchH7vI-WZl3TFN4",
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
      password: "Lucas55555",
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
