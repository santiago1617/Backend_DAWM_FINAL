const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('noticias', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true
      },
      id_tipo: {
        type: DataTypes.INTEGER,
        references: {
          model: 'tipo_noticias',
          key: 'id'
      }
      },
      title: {
        type: DataTypes.STRING
      },
      link_image: {
        type: DataTypes.STRING
      },
      id_creator: {
        type: DataTypes.INTEGER,
        references: {
          model: 'autores',
          key: 'id'
      }
      },
      description: {
        type: DataTypes.STRING
      },

    }, {
        sequelize,
        tableName: 'noticias',
        timestamps: false
    });
};