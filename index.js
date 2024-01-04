//? Este MÓDULO es el que INICIA la aplicación
const server = require('./src/server');
const {sequelize} = require('./src/db'); //* acá importo a la BDD
const PORT = 3001;

server.listen(PORT, () => {
  sequelize.sync({
    alter: true
  }); 
  console.log(`Servidor iniciado en el puerto ${PORT}`);
})