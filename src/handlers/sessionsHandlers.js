const {
  createSession,
  getAllSessions,
  getAllSessionsByName,
  getAllSessionsByDate,
  getSessionById,
  modificateSession,
  deleteSession,
} = require('../controllers/sessionsControllers');

//* HANDLERS
const createSessionHandler = async (req, res) => {
  try {
    const { name, date, evolution, patientId } = req.body;

    if (!name || !date || !evolution || !patientId) {
      return res
        .status(400)
        .json({ error: 'Todos los campos son obligatorios' });
    }

    const newSession = await createSession(name, date, evolution, patientId);

    const success = {
      message: 'Evolución creada exitosamente',
      session: newSession,
    };

    res.status(201).json(success);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSessionsHandler = async (req, res) => {
  const { name, date } = req.query;

  try {
    if (name && date) {
      const sessions = await getAllSessionsByName(name);
      return res.status(200).json({ sessions });
    } else if (name) {
      const sessions = await getAllSessionsByName(name);
      return res.status(200).json({ sessions });
    } else if (date) {
      const sessions = await getAllSessionsByDate(date);
      return res.status(200).json({ sessions });
    } else {
      const sessions = await getAllSessions();
      return res.status(200).json({ sessions });
    }
  } catch (error) {
    if (name) {
      return res
        .status(404)
        .json({ error: 'No existen sesiones asociadas a ese paciente' });
    } else if (date) {
      return res
        .status(404)
        .json({ error: 'No existen sesiones en esa fecha' });
    } else {
      return res.status(404).json({ error: 'No hay sesiones cargadas' });
    }
  }
};

const getSessionByIdHandler = (req, res) => {
  const { id } = req.params;
  res.send(
    `Estoy utilizando el handler para obtener, mediante el ID: ${id}, una sesión en particular`
  );
};

const modificateSessionHandler = (req, res) => {
  res.send('MODIFICO una sesión por su ID desde el handler');
};

const deleteSessionHandler = (req, res) => {
  res.send('ELIMINO una sesión mediante su ID desde el handler');
};

module.exports = {
  getSessionsHandler,
  getSessionByIdHandler,
  createSessionHandler,
  modificateSessionHandler,
  deleteSessionHandler,
};
