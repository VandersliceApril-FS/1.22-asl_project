# Commands

DELETE from Choices where label = 'vegetable';
DELETE from Choices where label = 'animal';
DELETE from Choices where label = 'fruit';

**remove all questions**
curl -X DELETE http://localhost:3000/questions/16
curl -X DELETE http://localhost:3000/questions/17


**adding choices with a questionId**
 curl -X POST --data "questionId=null" http://localhost:3000/choices/26

curl -X POST --data "name=April's Quiz" http://localhost:3000/quizzes
curl -X POST --data "name=Dallas" http://localhost:3000/choices

**connect a specific question to a quiz by adding a quiz id**
curl -X POST --data "quizId=20" http://localhost:3000/questions/10

**Edit**
curl -X POST --data "questionId=10" http://localhost:3000/choices/25

**CREATE new choices**
curl -X POST --data "label=Washington D.C" http://localhost:3000/choices
curl -X POST --data "label=Dallas" http://localhost:3000/choices

**connect choices to questions**
curl -X POST --data "questionId=10" http://localhost:3000/choices/

**DELETE choice**
curl -X DELETE http://localhost:3000/choices/18



generate new login token model
-------------------------------
`npx sequelize-cli model:generate --name=LoginToken --attributes=token:string`

run LoginToken migration
---------------------
npx sequelize-cli db:migrate


Questions
----------
 * how are sites running on different ports
 * how is the starting page localhost:3001
 

 [Adding a column](https://dev.to/nedsoft/add-new-fields-to-existing-sequelize-migration-3527)
 [More docs on migration/adding column](https://sequelize.org/v3/docs/migrations/)
 1. create the migration file for the change
 `npx sequelize-cli migration:generate --name migration_file_name`

 2. create the changes in the migration file

 queryInterface.addColumn(
  'nameOfAnExistingTable',
  'nameOfTheNewAttribute',
  {
    type: Sequelize.STRING,
    allowNull: false
  }
)

3. Update the model with the new column
4. npx sequelize-cli db:migrate
5. Sidenote: I edited the original create-question.js migration with the new field


'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Questions', [
    // Quiz 22
    {
      question: 'Choose the best one:',
      quizId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Which is required?',
      quizId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'What is the M in the MVC acronym?',
      quizId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'What does ORM stand for?',
      quizId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Quiz 23
    {
      question: 'Which of these is actually relates to this class?',
      quizId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      question: 'Which ORM did we use?',
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
    // Quiz 24
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
    // Quiz 25
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
      {quizId: 22}, 
      {quizId: 23},
      {quizId: 24},
      {quizId: 25},
    ]});
  }
};