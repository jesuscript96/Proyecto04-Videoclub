'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("users", {
     mail: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false
    },
    birth_Date: {
      type: Sequelize.DATE
    },
    password: {
      type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
      },
    userRole: {
        type: Sequelize.INTEGER,
        references: {
          model: "roles",
          key: "id_role"
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
