var DataTypes = require("sequelize").DataTypes;
var _autores = require("./autor");
var _noticias = require("./noticia");
var _tipo_noticias = require("./tipo_noticia");
var _personas=require('./personas');

function initModels(sequelize) {
  var autores = _autores(sequelize, DataTypes);
  var noticias = _noticias(sequelize, DataTypes);
  var tipo_noticias = _tipo_noticias(sequelize, DataTypes);
  var personas = _personas(sequelize, DataTypes);

  autores.hasMany(noticias, { as: "noticias", foreignKey: "id"});
  noticias.belongsTo(autores, { as: "autor", foreignKey: "id_creator"});

  noticias.removeAttribute('id');

  return {
    autores,
    noticias,
    tipo_noticias,
    personas
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
