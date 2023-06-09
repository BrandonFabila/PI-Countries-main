const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificultad: {
      type: DataTypes.ENUM(["1", "2", "3", "4", "5"]),
      allowNull: false,
    },
    duracion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    temporada: {
      type: DataTypes.ENUM(["Primavera", "Verano", "Otoño", "Invierno"]),
      allowNull: false,
    },
  },
    { timestamps: false, }
  );
};
