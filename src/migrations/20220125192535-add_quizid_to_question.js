'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Questions',
      'quizId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Quizzes'
          },
          key: 'id'
        },
        allowNull: true
      },
    )
  },

  down: async (queryInterface, Sequelize) => {
   // Add reverting commands here.
   await queryInterface.removeColumn(
    'Questions',
    'quizId'
  )}
};
