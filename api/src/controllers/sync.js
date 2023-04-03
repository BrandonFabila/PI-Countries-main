
const { conn } = require('../db.js');
const { Country } = require('../db')
const axios = require('axios');

conn.sync({ force: true }).then(async () => {
    try {
        //Almacena todo el api
        const { data } = await axios.get('https://restcountries.com/v3/all');
        //almacena solo la informacion solicitada
        const countries = data.map(c => {
            return {
                count_id: c.cca3,
                name: c.name.common ? c.name.common : "N/A",
                img: c.flags[0] ? c.flags[0] : "N/A",
                continente: c.continents[0] ? c.continents[0] : "N/A",
                capital: c.capital ? c.capital[0] : "N/A", // some are undefined
                subregion: c.subregion ? c.subregion : "N/A", // some are undefined
                //en km2
                area: c.area ? c.area : "N/A",
                poblacion: c.population ? c.population : "N/A",
                languages: c.languages ? c.languages: "N/A",
                //moneda
                currencies: c.currencies ? c.currencies : "N/A",
            }
        })
        //almacena en db las nacionalidades
        await Country.bulkCreate(countries)
    } catch (error) {
        console.log("No se cargaron los paises")
        console.log(error)
    } finally {
        console.log(`${await Country.count()} Paises cargados`)
    }
}).catch(e => {
    console.log("Error al sicronizar")
    console.log(e)
});