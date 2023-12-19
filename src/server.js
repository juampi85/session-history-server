//? Este MÓDULO es el que CREA el SERVIDOR
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

const server = express(); //* a partir de acá "server" es mi SERVIDOR

server.use(morgan('dev')); //* la request pasa por acá, lo reistra el morgan y sigue su camino
server.use(express.json()); //* para que el server pueda entender los JSON que llegan desde el cliente

server.use(routes); //* y cuando la req viene acá le indicamos que siga el camino de las "routes" mediante el index, desde ahí se va al patientsRouter para buscar su ENDPOINT



module.exports = server;