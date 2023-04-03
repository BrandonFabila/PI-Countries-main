//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { default: axios } = require('axios');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
//importa modelo directamente de la db
const { Country } = require('./src/db.js');
const port = 3001;
const api = 'https://restcountries.com/v3/all';

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(port, async() => {
    const allCountries = Country.findAll();
    //verifica si el modelo esta vacio
    if(!allCountries.length){
      //almacena data
      const apiCountries = await axios.get(api);
      //mapea
      let data = apiCountries.data.map((c) => {
        return {
          id: c.cca3,
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
      //almacena en la tabla Countries de db multiples registros
      await Country.bulkCreate(data);
    }
    console.log(`server listening at port ${port} correctly`); // eslint-disable-line no-console
  });
});
