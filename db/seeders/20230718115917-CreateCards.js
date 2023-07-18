/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [
      {
        question: 'Airport',
        answer: 'Аэропорт',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Train',
        answer: 'Поезд',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Luggage',
        answer: 'Багаж',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Cat',
        answer: 'Кот',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Good morning',
        answer: 'Доброе утро',
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Movie',
        answer: 'Фильм',
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'I love you',
        answer: 'Я тебя люблю',
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Where is the bathroom',
        answer: 'Где туалет',
        categoryId: 6,
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
    await queryInterface.bulkDelete('Cards', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
