//* PASOS PARA CONECTAR LA BDD
//? crear la conexión con la BDD ---> hecho
//? definir los modelos ---> hecho
// relacionarlos
// exportarlos

//* comandos SQL SHELL
// \l ---> lista las bases de datos;
// \c  ejemplo ---> conecta a una base de datos llamada "ejemplo";
// \dt ---> lista las tablas de una base de datos;

//* IMPORTACIONES NECESARIAS
const { Sequelize } = require('sequelize');
const UserModel = require('./models/User'); //* importo la función que define al modelo
const SessionModel = require('./models/Session'); //* importo la función que define al modelo

require('dotenv').config(); //* acá hago que las variables de entorno estén disponibles

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize( //* acá conecté el servidor con la BDD
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/session_history`,
  { logging: false }
);

UserModel(sequelize); //* acá ejecuto la función enviándole la instancia de Sequelize que define al modelo
SessionModel(sequelize);


// console.log(sequelize.models) // acá controlamos que sequelize haya traido a los MODELOS

const { User, Session } = sequelize.models;

User.hasMany(Session);
Session.belongsTo(User);

module.exports = { sequelize };
