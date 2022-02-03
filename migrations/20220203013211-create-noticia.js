'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('noticias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_tipo: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      link_image: {
        type: Sequelize.STRING
      },
      id_creator: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('noticias');
  }
};