'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Choices', [
    // quizId: 38
      //questionId: 99
    {
      label: 'DBAL Design Patterns',
      questionId: 99,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'ORM',
      questionId: 99,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Models & Migrations',
      questionId: 99,
      createdAt: new Date(),
      updatedAt: new Date()
    },
     // quizId: 38
      //questionId: 100
    {
      label: 'Models',
      questionId: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Migrations',
      questionId: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Both',
      questionId: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
     // quizId: 38
      //questionId: 101
    {
      label: 'Mapping',
      questionId: 101,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Mimosas',
      questionId: 101,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Model',
      questionId: 101,
      createdAt: new Date(),
      updatedAt: new Date()
    },
     // quizId: 38
      //questionId: 102
    {
      label: 'Object Relational Mappers',
      questionId: 102,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Object Relation Models',
      questionId: 102,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Object Request Manipulation',
      questionId: 102,
      createdAt: new Date(),
      updatedAt: new Date()
    },
     // quizId: 39
      //questionId: 103
    {
      label: 'RESTful API',
      questionId: 103,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Resting',
      questionId: 103,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Rusting',
      questionId: 103,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // quizId: 39
      //questionId: 104
    {
      label: 'NodeJS ORM',
      questionId: 104,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Sequelize',
      questionId: 104,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'NodeJS ORM: Sequelize',
      questionId: 104,
      createdAt: new Date(),
      updatedAt: new Date()
    },

  ], {}),

  down: async (queryInterface, Sequelize) => {
   await queryInterface.bulkDelete('Choices', {[Sequelize.Op.or]: [
     {questionId: 99},
     {questionId: 100},
     {questionId: 101},
     {questionId: 102},
     {questionId: 103},
     {questionId: 104},
   ]})
  }
};
