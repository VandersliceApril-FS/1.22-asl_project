'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Quizzes',
      'weight',
      {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    // Add reverting commands here.
    await queryInterface.removeColumn(
      'quiz',
      'weight'
    )}
};
