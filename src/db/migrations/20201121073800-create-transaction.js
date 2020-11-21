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
      trans_id: {
        type: Sequelize.UUID
      },
      trans_type: {
        type: Sequelize.UUID
      },
      item: {
        type: Sequelize.UUID
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      uom: {
        type: Sequelize.UUID
      },
      unit_price: {
        type: Sequelize.INTEGER
      },
      total_price: {
        type: Sequelize.INTEGER
      },
      mode: {
        type: Sequelize.UUID
      },
      place: {
        type: Sequelize.UUID
      },
      for: {
        type: Sequelize.UUID
      },
      notes: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};