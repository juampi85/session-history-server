const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Session', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    evolution: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
