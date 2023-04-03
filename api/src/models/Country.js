const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    count_id: {
      type: DataTypes.UUID,
      DefaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      validate: {
        //todas letras
				isAlpha: true,
        //todos mayusculas
				isUppercase: true,
        //tres carcteres
				isThree: (val) => {
					if (val.length !== 3) {
						throw Error('El ID debe contener 3 letras mayusculas');
					}
				}
			},
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    poblacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lenguages: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    moneda: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    }
  },
    { timestamps: false }
  );
};
