'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      concept: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      amount: {
        type: Sequelize.FLOAT
      },
      type: {
        type: Sequelize.STRING
      },
      UserID: {
        type:Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'Users',
          key:'id',
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};