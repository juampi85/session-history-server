//? Este MÓDULO es el que INICIA la aplicación
const server = require('./src/server');
const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`)
})