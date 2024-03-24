'use strict';

const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('12345', 10)

    await queryInterface.bulkInsert('users', [
      {name: 'Bruno', email: 'bruno@teste.com', password: hashedPassword, created_at: new Date(), updated_at: new Date()},
      {name: 'Thiago', email: 'thiago@teste.com', password: hashedPassword, created_at: new Date(), updated_at: new Date()},
      {name: 'Lucas', email: 'lucas@teste.com', password: hashedPassword, created_at: new Date(), updated_at: new Date()},
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
