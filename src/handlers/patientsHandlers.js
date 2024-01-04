const {
  createPatient,
  getAllPatients,
  getPatientByName,
  getPatientById,
  modificatePatient,
  deletePatient,
} = require('../controllers/patientsControllers');

//* HANDLERS
const createPatientHandler = async (req, res) => {
  try {
    const { name, age, phone, address, payment } = req.body;
    const newPatient = await createPatient(name, age, phone, address, payment); //* pongo el AWAIT porque el createPatient me devuelve una PROMESA

    const success = {
      message: 'Paciente creado de forma exitosa',
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
      const patientSearched = await getPatientByName(name);
      res.status(200).json(patientSearched);
    } else {
      const allPatients = await getAllPatients();
      res.status(200).json(allPatients);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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

const modificatePatientHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, phone, address, payment } = req.body;

    const modificatedPatient = await modificatePatient(
      id,
      name,
      age,
      phone,
      address,
      payment
    );

    const success = {
      message: 'Paciente actualizado de forma exitosa',
      patient: modificatedPatient,
    };
    res.status(200).json(success);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePatientHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPatient = await deletePatient(id);

    const success = {
      message: 'Paciente eliminado correctamente',
      deletedPatient,
    };

    res.status(200).json(success);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

module.exports = {
  createPatientHandler,
  getPatientsHandlers,
  getPatientByIdHandler,
  modificatePatientHandler,
  deletePatientHandler,
};
