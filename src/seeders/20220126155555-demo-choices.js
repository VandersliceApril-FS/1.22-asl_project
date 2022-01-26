'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Choices', [
    // quizId: 22
      //questionId: 35
    {
      label: 'DBAL Design Patterns',
      questionId: 35,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'ORM',
      questionId: 35,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Models & Migrations',
      questionId: 35,
      createdAt: new Date(),
      updatedAt: new Date()
    },
     // quizId: 22
      //questionId: 36
    {
      label: 'Models',
      questionId: 36,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Migrations',
      questionId: 36,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Both',
      questionId: 36,
      createdAt: new Date(),
      updatedAt: new Date()
    },
     // quizId: 22
      //questionId: 37
    {
      label: 'Mapping',
      questionId: 37,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Mimosas',
      questionId: 37,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Model',
      questionId: 37,
      createdAt: new Date(),
      updatedAt: new Date()
    },
     // quizId: 22
      //questionId: 38
    {
      label: 'Object Relational Mappers',
      questionId: 38,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Object Relation Models',
      questionId: 38,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Object Request Manipulation',
      questionId: 38,
      createdAt: new Date(),
      updatedAt: new Date()
    },
     // quizId: 23
      //questionId: 39
    {
      label: 'RESTful API',
      questionId: 39,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Resting',
      questionId: 39,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Rusting',
      questionId: 39,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'NodeJS ORM',
      questionId: 40,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Sequelize',
      questionId: 40,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'NodeJS ORM: Sequelize',
      questionId: 40,
      createdAt: new Date(),
      updatedAt: new Date()
    },

  ], {}),

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('Choices', {[Sequelize.Op.or]: [
     {questionId: 35},
     {questionId: 36},
     {questionId: 37},
     {questionId: 38},
     {questionId: 39},
     {questionId: 40},
   ]})
  }
};
