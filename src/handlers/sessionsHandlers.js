const {
  createSession,
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
  // const { name, date } = req.query;

  try {
    let sessions;

    // if (!name && !date) {
      // Si no hay parámetros de búsqueda, traer todas las sesiones
      return sessions = await getAllSessions();
    // } else if (name && date) {
    //   return sessions = await getAllSessionsByName(name);
    // } else if (name) {
    //   return sessions = await getAllSessionsByName(name);
    // } else if (date) {
    //   return sessions = await getAllSessionsByDate(date);
    // }

    // if (sessions.length === 0) {
    //   return res.status(404).json({ error: 'No hay sesiones cargadas' });
    // }

    return res.status(200).json({ sessions });
  } catch (error) {
    console.error(error);
    return res.status(404).json({ error: 'Error al recuperar sesiones' });
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
