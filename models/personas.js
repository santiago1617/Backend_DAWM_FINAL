const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('personas', {
    user: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    rol:{
      type:DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    tableName: 'personas',
    timestamps: false
  });
};