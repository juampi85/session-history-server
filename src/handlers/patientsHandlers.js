const {
  createPatient,
  getPatients,
  getPatientById,
} = require('../controllers/patientsControllers');

//* HANDLERS
const createPatientHandler = async (req, res) => {
  try {
    const { name, age, phone, address, payment } = req.body;
    const newPatient = await createPatient(name, age, phone, address, payment); //* pongo el AWAIT porque el createPatient me devuelve una PROMESA

    const success = {
      message: 'Paciente creado de forma exitosa.',
      patient: newPatient,
    };
    res.status(201).json(success);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPatientsHandlers = async (req, res) => {
const { name } = req.query;
try {
  if (name) {
    res.send(`Estoy en Patients, soy ${name}`);
  } else {
    res.send('Estoy en Patients, soy un paciente sin nombre ni edad');
  }
} catch (error) {}
};

const getPatientByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const patientSearched = await getPatientById(id);
    res.status(200).json(patientSearched);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const modificatePatientHandler = (req, res) => {
  res.send('MODIFICO un paciente por su ID');
};

const deletePatientHandler = (req, res) => {
  res.send('ELIMINO un paciente mediante su ID');
};

module.exports = {
  getPatientsHandlers,
  getPatientByIdHandler,
  createPatientHandler,
  modificatePatientHandler,
  deletePatientHandler,
};
