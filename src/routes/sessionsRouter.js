const { Router } = require('express');
const {
  getSessionsHandler,
  getSessionByIdHandler,
  createSessionHandler,
  modificateSessionHandler,
  deleteSessionHandler,
} = require('../handlers/sessionsHandlers');
const sessionsRouter = Router();


sessionsRouter.get('/', getSessionsHandler);
sessionsRouter.get('/:id', getSessionByIdHandler);
sessionsRouter.post('/', createSessionHandler);
sessionsRouter.put('/:id', modificateSessionHandler);
sessionsRouter.delete('/:id', deleteSessionHandler);

module.exports = sessionsRouter;