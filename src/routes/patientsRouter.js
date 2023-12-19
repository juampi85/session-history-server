const { Router } = require('express');
const {
  getPatientsHandlers,
  getPatientByIdHandler,
  createPatientHandler,
  modificatePatientHandler,
  deletePatientHandler
} = require('../handlers/patientsHandlers');
const patientsRouter = Router();


patientsRouter.get('/', getPatientsHandlers);
patientsRouter.get('/:id', getPatientByIdHandler);
patientsRouter.post('/', createPatientHandler);
patientsRouter.put('/:id', modificatePatientHandler);
patientsRouter.delete('/:id', deletePatientHandler);

module.exports = patientsRouter;