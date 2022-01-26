'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Questions', [
    // Quiz 1
    {
      question: 'Question one?',
      quizId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question two?',
      quizId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question three?',
      quizId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question four?',
      quizId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Quiz 2
    {
      question: 'Question one?',
      quizId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question two?',
      quizId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question three?',
      quizId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question four?',
      quizId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Quiz 3
    {
      question: 'Question one?',
      quizId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question two?',
      quizId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question three?',
      quizId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question four?',
      quizId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Quiz 4
    {
      question: 'Question one?',
      quizId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question two?',
      quizId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question three?',
      quizId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Question four?',
      quizId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {}),
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Quizzes', {[Sequelize.Op.or]: [
      {quizId: 1}, 
      {quizId: 2},
      {quizId: 3},
      {quizId: 4},
    ]});
  }
};