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

const getAllPatients = async (name) => {
  const allPatients = await Patient.findAll();

  return allPatients;
};

const getPatientByName = async (name) => {
  const patientSearched = await Patient.findOne({
    where: { name: { [Op.iLike]: name } },
  });

  if (!patientSearched) {
    throw new Error('No existe ningún paciente con ese nombre');
  }

  return patientSearched;
};

const getPatientById = async (id) => {
  const patientSearched = await Patient.findOne({
    where: { id },
  });

  return patientSearched;
};

const modificatePatient = async (id, name, age, phone, address, payment) => {
  const modificatedPatient = await Patient.findByPk(id);

  if (!modificatedPatient) throw new Error('Paciente no encontrado');

  if (name) modificatedPatient.name = name;
  if (age) modificatedPatient.age = age;
  if (phone) modificatedPatient.phone = phone;
  if (address) modificatedPatient.address = address;
  if (payment) modificatedPatient.payment = payment;

  await modificatedPatient.save();

  return modificatedPatient;
};

const deletePatient = async (id) => {
  const patientToDelete = await Patient.findByPk(id);

  if (!patientToDelete) throw new Error('Paciente no encontrado');

  if (patientToDelete)
    Patient.destroy({
      where: {
        id,
      },
    });

  return patientToDelete;
};

module.exports = {
  createPatient,
  getAllPatients,
  getPatientByName,
  getPatientById,
  modificatePatient,
  deletePatient,
};
