const Sequelize = require('sequelize');

const dbConfig = require("../config/db.config.js");

const connection = new Sequelize(dbConfig);

try 
  {
    connection.authenticate();
    console.log("Conexão estabelecida com sucesso!!");
  } 
catch (error) 
  {
    console.error('Não foi possível conectar à base de dados', error);
  }

module.exports = connection;