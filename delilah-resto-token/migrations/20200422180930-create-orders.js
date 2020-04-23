'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_status: {
        type: Sequelize.STRING(8),
        allowNull: false,
      },
      order_time: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      order_description: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      order_amount: {
        type: Sequelize.STRING,
        allowNull: false
      },
      payment_method: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};