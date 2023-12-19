//* PASOS PARA CONECTAR LA BDD

// crear la conexión con la BDD
// definir los modelos
// relacionarlos
// exportarlos

//* comandos SQL SHELL
// \l ---> lista las bases de datos;
// \c  ejemplo ---> conecta a una base de datos llamada "ejemplo";
// \dt ---> lista las tablas de una base de datos;

//* IMPORTACIONES NECESARIAS
const Sequelize = require('sequelize');
require('dotenv').config(); //* acá hago que las variables de entorno estén disponibles
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;


const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/session_history`
);

