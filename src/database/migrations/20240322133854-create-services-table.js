'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },

      service_name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },

      description: {
        allowNull: false,
        type: Sequelize.DataTypes.TEXT
      },

      duration_time: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      },

      price: {
        type: Sequelize.DataTypes.INTEGER
      },

      user_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('services')
  }
};
