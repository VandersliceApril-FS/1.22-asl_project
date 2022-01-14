npx sequelize-cli model:generate --name=Choice --attributes=name:string
npx sequelize-cli model:generate --name=Question --attributes=name:string
npx sequelize-cli model:generate --name=Choice --attributes=name:string
npx sequelize-cli model:generate --name=Question --attributes=name:string
npx sequelize-cli db:migrate


CREATE: curl -X POST --data "name=April's Quiz" http://localhost:3000/quizzes
UPDATE: curl -X POST --data "name=April's Test" http://localhost:3000/quizzes/1
DELETE: curl -X DELETE http://localhost:3000/quizzes/1
Redirect Response: curl -I -X DELETE http://localhost:3000/quizzes/2


CREATE: curl -X POST --data "name=What color is grass?" http://localhost:3000/questions
UPDATE: curl -X POST --data "name=What color are strawberries" http://localhost:3000/questions/3
DELETE: curl -I -X DELETE http://localhost:3000/questions/2

CREATE: curl -X POST --data "name=Blue" http://localhost:3000/choices
UPDATE: curl -X POST --data "name=Red" http://localhost:3000/choices/5
DELETE: curl -I -X DELETE http://localhost:3000/choices/3


Adding a column: https://sequelize.org/v3/docs/migrations/
-----------------------------------------------------------
Show: curl -X GET http://localhost:3000/quizzes
CREATE: curl -X POST --data "name=Express&weight=20" http://localhost:3000/quizzes/8
UPDATE: curl -X POST --data "name=Models and Migrations&weight=30" http://localhost:3000/quizzes/6
DELETE: curl -X DELETE http://localhost:3000/quizzes/4
Redirect Response: curl -I -X DELETE http://localhost:3000/quizzes/5



## Get data from controller into the view
inject a variable in the second parameter of render, can be an object of all the variables you'd like to deine in your view.

## Loading in a quiz
Load in the quiz asyn. 