//* HANDLERS
const getSessionsHandler = (req, res) => {
  const { name, date } = req.query;
  (name && date)
    ? res.send(`Estoy usando el handler para recuperar las sesiones con nombre: ${name} en la fecha: ${date}`)
    : res.send('Estoy usando el handler para recuperar las sesiones');
};
const getSessionByIdHandler = (req, res) => {
  const {id} = req.params;
  res.send(
    `Estoy utilizando el handler para obtener, mediante el ID: ${id}, una sesión en particular`
  );
};
const createSessionHandler = (req, res) => {
  const { name, date, evolution } = req.body;
  
  // res.json({ message: name, date, evolution });
  res.send(`Se crea el registro de una nueva sesión de ${name}, el día ${date} y la evolución es: ${evolution}`);
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
