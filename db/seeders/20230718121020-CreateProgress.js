/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Progresses', [
      {
        isLearned: true,
        cardId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        isLearned: false,
        cardId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        isLearned: true,
        cardId: 3,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        isLearned: true,
        cardId: 4,
        userId: 1,
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
    await queryInterface.bulkDelete('Progresses', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
