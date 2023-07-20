/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'путешествия',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'животные',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'приветствия',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'развлечения',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'общие фразы',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'дом',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'еда',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'природа',
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
