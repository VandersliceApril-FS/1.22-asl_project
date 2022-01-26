'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // add quizId field to Questions
    queryInterface.addColumn('Questions', 'quizId', {
      type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Quizzes'
          },
          key: 'id'
        },
        allowNull: true
    })
    // Questions table: rename column 'name' -> 'question'. Makes more sense.
    queryInterface.renameColumn('Questions', 'name', 'question')

    // add questionId field to Choices
    queryInterface.addColumn('Choices', 'questionId', {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: 'Questions'
        },
        key: 'id'
      },
      allowNull: true
    })

    // Choices table: rename column 'name' -> 'label'. 
    queryInterface.renameColumn('Questions', 'name', 'question')
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Questions', 'quizId')
    queryInterface.removeColumn('Choices', 'questionId')
  }
};
