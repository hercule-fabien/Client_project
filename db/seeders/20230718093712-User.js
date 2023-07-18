const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const hash = await bcrypt.hash('123456', 10);
    await queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      email: '123@123.ru',
      password: hash,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Users', null, {});
     
  },
};
