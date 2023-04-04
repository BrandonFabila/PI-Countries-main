const { Sequelize } = require('sequelize')
const { Country, Activity } = require('../db')

const getCountries = async (req, res) => {
    try {
        const {name} = req.query;
        //busqueda por nombre
        if (name) {
            //todas las posivilidades
            let upperName = name.charAt(0).toUpperCase() + name.slice(1)
            const countries = await Country.findAll({
                where: {
                    //el operador compara valores
                    name: { [Sequelize.Op.iLike]: `%${upperName}%` }
                },
                //include para hacer el join de las tablas
                include: Activity  
                });
                if (countries[0] == null) {
                    res.status(400).json('🔍 El país solicitado no existe, verifica tu busqueda 🔎')
                } else {
                    res.status(200).json(countries)
                }
            }
        //toda la data
        else {
            const allCountries = await Country.findAll({
                include: Activity
            });
            if(allCountries[0] == null) {
                res.status(404).json('❌ No existen datos en la DB ❌')
            } else {
                res.status(200).json(allCountries);
            }
        }
    } catch (error) {
        res.status(500).json({error})
    }
}

const getCountriesByID = async (req, res) => {
    try {
        const {idpais} = req.params;
        //busca por primary key
        if (idpais) {
            if (idpais.length !== 3) {
                res.status(400).json('❌ El id debe contener 3 letras ❌')
            } else {
                //busca registro por primary key
                const country = await Country.findByPk(idpais.toUpperCase(), {
                    include: Activity
                });
                if (!country) {
                    res.status(400).json('🔍 El id solicitado no existe, verifica tu busqueda 🔎')
                } else {
                    res.status(200).json(country)
                }
            }
        }
    } catch (error) {
        res.status(500).json({error})
    }
}


module.exports = { getCountries, getCountriesByID }