const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('roles', {
    tipo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'roles',
    timestamps: false
  });
};