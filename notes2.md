# Commands

curl -X POST --data "name=April's Quiz" http://localhost:3000/quizzes
curl -X POST --data '{"Questions":["What color are strawberries?", "What color is the sky?", "What color is grass?"]}' http://localhost:3000/quizzes/20
curl -X POST --data "quizId=20" http://localhost:3000/questions/10



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