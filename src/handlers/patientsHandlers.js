//* HANDLERS
const getPatientsHandlers = (req, res) => {
  const { name, age } = req.query;
  
  if (name && age) {
    res.send(`Estoy en Patients, soy ${name} y tengo ${age} años`);
  } else {
    res.send('Estoy en Patients, soy un paciente sin nombre ni edad')
  }
};

const getPatientByIdHandler = (req, res) => {
  const {id} = req.params;
  res.send(`Obtengo pacientes por su ID. En este caso es ${id}`);
};

const createPatientHandler = (req, res) => {
  res.send('Creo un NUEVO paciente');
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
  deletePatientHandler
}