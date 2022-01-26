'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Questions', [
    // Quiz 38
    {
      question: 'Choose the best one:',
      quizId: 38,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Which is required?',
      quizId: 38,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'What is the M in the MVC acronym?',
      quizId: 38,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'What does ORM stand for?',
      quizId: 38,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Quiz 39
    {
      question: 'Which of these is actually relates to this class?',
      quizId: 39,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Which ORM did we use?',
      quizId: 39,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question three?',
      quizId: 39,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question four?',
      quizId: 39,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Quiz 40
    {
      question: 'Question one?',
      quizId: 40,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question two?',
      quizId: 40,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question three?',
      quizId: 40,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question four?',
      quizId: 40,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Quiz 41
    {
      question: 'Question one?',
      quizId: 41,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question two?',
      quizId: 41,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question three?',
      quizId: 41,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question four?',
      quizId: 41,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {}),
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Quizzes', {[Sequelize.Op.or]: [
      {quizId: 38}, 
      {quizId: 39},
      {quizId: 40},
      {quizId: 41},
    ]});
  }
};