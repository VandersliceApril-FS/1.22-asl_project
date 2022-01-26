# Commands

MySql:
DELETE from Quizzes where name = 'Models and Migrations II';
DELETE from Quizzes where name = 'Express';
DELETE from Quizzes where name = 'JSON Return Type';
DELETE from Quizzes where name = 'Quiz 17';
DELETE from Quizzes where name = 'dog';
DELETE from Quizzes where name = 'April Vanderslice';
DELETE from Quizzes where name = 'April's Quiz';
**remove all choices**
DELETE from Choices where name = 'pig';
DELETE from Choices where name = 'Dog II';
DELETE from Choices where name = 'Red';
DELETE from Choices where name = 'Yellow';
DELETE from Choices where name = 'Dallas';



**remove all questions**
curl -X DELETE http://localhost:3000/questions/10
curl -X DELETE http://localhost:3000/questions/11



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