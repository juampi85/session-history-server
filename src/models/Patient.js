const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Patient',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      payment: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [['particular', 'medical-insurance']],
        },
      },
    },
    { timestamps: false }
  );
}