const { Op } = require('sequelize');
const { Session } = require('../db');

const createSession = async (name, date, evolution, patientId) => {
  const newSession = await Session.create({
    name,
    date,
    evolution,
    patientId
  })

  return newSession;
};

const getAllSessions = async () => {
  const sessions = await Session.findAll();
  return sessions;
};

const getAllSessionsByName = async (name) => {
  const sessions = await Session.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`, // Buscar nombres que contengan la cadena proporcionada (case-insensitive)
      },
    },
  });

  return sessions;
};

const getAllSessionsByDate = async (date) => {
  const sessions = await Session.findAll({
    where: {
      date: date,
    },
  });

  return sessions;
};

const getSessionById = () => {

};

const modificateSession = () => {

};

const deleteSession = () => {

};

module.exports = {
  createSession,
  getAllSessions,
  getAllSessionsByName,
  getAllSessionsByDate,
  getSessionById,
  modificateSession,
  deleteSession,
};