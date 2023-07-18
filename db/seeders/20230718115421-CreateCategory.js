/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'travel',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'animal',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'greetings',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'entertainment',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'common phrases',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'home',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
