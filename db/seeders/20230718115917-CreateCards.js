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
      // Новый сид "Путешествия"
      {
        question: 'Beach',
        answer: 'Пляж',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Hotel',
        answer: 'Отель',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Plane',
        answer: 'Самолет',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Новый сид "Путешествия"
      {
        question: 'Cat',
        answer: 'Кот',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Новый сид "Животные"
      {
        question: 'Dog',
        answer: 'Собака',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Bird',
        answer: 'Птица',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Mouse',
        answer: 'Мышь',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Elephant',
        answer: 'Слон',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Snake',
        answer: 'Змея',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Новый сид "Животные"
      {
        question: 'Good morning',
        answer: 'Доброе утро',
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Новый сид "Приветствия"
      {
        question: 'Good evening',
        answer: 'Добрый вечер',
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Goodbye',
        answer: 'До свидания',
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Hello',
        answer: 'Привет',
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'How are you?',
        answer: 'Как дела?',
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Nice to meet you',
        answer: 'Приятно познакомиться',
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Новый сид "Приветствия"
      {
        question: 'Movie',
        answer: 'Фильм',
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Новый сид "Развлечения"
      {
        question: 'Game',
        answer: 'Игра',
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Restaurant',
        answer: 'Ресторан',
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Cinema',
        answer: 'Кинотеатр',
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Shopping',
        answer: 'Шоппинг',
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Museum',
        answer: 'Музей',
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Новый сид "Развлечения"
      {
        question: 'I love you',
        answer: 'Я тебя люблю',
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Новый сид "Общие фразы"
      {
        question: 'Do you speak English?',
        answer: 'Вы говорите по-английски?',
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Can you help me, please?',
        answer: 'Не могли бы вы мне помочь, пожалуйста?',
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'What time is it?',
        answer: 'Который час?',
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Could you repeat that, please?',
        answer: 'Не могли бы вы повторить это, пожалуйста?',
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'What is your favorite movie?',
        answer: 'Какой ваш любимый фильм?',
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Новый сид "Общие фразы"
      // Вообще новые
      {
        question: 'Дом',
        answer: 'House',
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Кухня',
        answer: 'Kitchen',
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Комната',
        answer: 'Room',
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Стол',
        answer: 'Table',
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Стул',
        answer: 'Chair',
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Холодильник',
        answer: 'Fridge',
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Суп',
        answer: 'Soup',
        categoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Мясо',
        answer: 'Meat',
        categoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Овощи',
        answer: 'Vegetables',
        categoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Фрукты',
        answer: 'Fruits',
        categoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Хлеб',
        answer: 'Bread',
        categoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Молоко',
        answer: 'Milk',
        categoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Дерево',
        answer: 'Tree',
        categoryId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Цветок',
        answer: 'Flower',
        categoryId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Река',
        answer: 'River',
        categoryId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Гора',
        answer: 'Mountain',
        categoryId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Озеро',
        answer: 'Lake',
        categoryId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Парк',
        answer: 'Park',
        categoryId: 8,
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
