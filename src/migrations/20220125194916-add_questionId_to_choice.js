'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Choices',
      'questionId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Questions'
          },
          key: 'id'
        },
        allowNull: true
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Choices', 'questionId')
  }
};
