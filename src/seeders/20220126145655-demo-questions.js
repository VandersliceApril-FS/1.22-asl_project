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
    return queryInterface.bulkDelete('Quizzes', null, {});
  }
};

// since the questions are connected to quizzes, I am unable to update them at this point --at least not from here. I can update them manually int he table? But that would make things messy.