'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const [users] = await queryInterface.sequelize.query('SELECT id FROM users;')

    await queryInterface.bulkInsert('services', [
      { service_name: 'Palestra sobre boas práticas na programação', description: 'Nesta palestra, abordaremos as melhores práticas que um profissional da área da programação deve ter em seu dia a dia.', duration_time: 60, price: 50, user_id: users[0].id, created_at: new Date(), updated_at: new Date() },
      { service_name: 'Palestra sobre Clean Code', description: 'O que é Clean Code? Abordaremos todos os conceitos para escrever os melhores e mais limpos códigos na programação.', duration_time: 40, price: 30, user_id: users[0].id, created_at: new Date(), updated_at: new Date() },
      { service_name: 'Dominando ReactJs', description: 'Aqui nos aprofundaremos na usabilidade do ReactJs e te daremos a direção para se tornar um excelente profissional.', duration_time: 120, price: 100, user_id: users[1].id, created_at: new Date(), updated_at: new Date() },
      { service_name: 'Conhecendo Next', description: 'Te mostraremos a base do NextJs e a praticidade que ele pode trazer como benefício no desenvolvimento da sua aplicação.', duration_time: 200, price: 150, user_id: users[1].id, created_at: new Date(), updated_at: new Date() },
      { service_name: 'Banco de Dados NoSQL', description: 'Uma baita aula mostrando a diferença entre Banco de Dados Relacionais e Não Relacionais, mostrando na prática com o MongoDB', duration_time: 60, price: 50, user_id: users[2].id, created_at: new Date(), updated_at: new Date() },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('services', null, {})
  }
};
