const { Op } = require('sequelize');
const { Patient } = require('../db');

const createPatient = async (name, age, phone, address, payment) => {
  const existingPatient = await Patient.findOne({
    where: { name: { [Op.iLike]: name } },
  });

  if (existingPatient) {
    throw new Error(
      'Ya existe un paciente con ese nombre; no hace falta crearlo.'
    );
  }

  const newPatient = await Patient.create({
    //* no perder de vista que el "Patient.create()" nos retorna una PROMESA
    name,
    age,
    phone,
    address,
    payment,
  });

  return newPatient;
};

const getPatients = async (name) => {};

const getPatientById = async (id) => {
  const patientSearched = await Patient.findOne({
    where: {id}
  })

  return patientSearched;
};

module.exports = {
  createPatient,
  getPatients,
  getPatientById,
};
