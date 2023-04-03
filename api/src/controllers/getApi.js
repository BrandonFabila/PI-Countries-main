const axios = require('axios');

const getApi = async () => {
    const URL =  await axios.get(`https://restcountries.com/v3/all`);
    const data = await URL.data.map(c => {
        
        return {
            //id
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
            moneda: c.currencies ? c.currencies : "N/A",
        }
    });
    return data
}

const getCountries = async (req, res) => {
    try {
        const countries = await Country.findAll({
            include: {
                model: Activity, througth: { attributes: [] },
            },
            order: [
                [ 'name', 'ASC']
            ]
        })
        return res.status(200).json(countries)
    } catch (err) {
        return res.status(500).json({
            err: {
                message: "Error en el servidor",
            }
        })
    }
}

module.exports = { getApi, getCountries };