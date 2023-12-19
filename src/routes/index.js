const { Router } = require('express');
const patientsRouter = require('./patientsRouter')
const sessionsRouter = require('./sessionsRouter');

const routes = Router();

routes.use('/patients', patientsRouter);
routes.use('/sessions', sessionsRouter);


module.exports = routes;