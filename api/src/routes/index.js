const { Router } = require('express');
const router = Router();


router.get('/', (req, res) => res.send('¡Bienvenido al backend de este precioso proyecto!'))
router.use('/countries', require('./countries'))
router.use('/activities', require('./activities'))
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;

/*
const { Router } = require('express');
// const axios = require('axios');
const { Country, Activity } = require('../db');
const { getAll, getCountries } = require('../controllers/getAll')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/countries', async (req, res, next) => {
    try {
        //trae de query el nombre
        const name = req.query.name;
        const id = req.params;
        //aqui se guardara toda la data
        let allCountries = await getAll();
        //si tiene query
        if(name) {
            let countryName = await allCountries.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
            countryName.length ? 
                res.status(200).send(countryName) :
                res.send([{
                    //si no tiene exito
                    name: 'Pais no encontrado'
                }]);
        } else {
            res.status(200).send(allCountries)
        }
    } catch (err) {
        next(err);
    }
});

router.get('/count', (req, res, next) => {
    if (req.query.name) {
        return 'por nombre'
    } else {
        return getCountries(req, res)
    }
})

//id 3 letras
router.get('/countries/:id', async (req, res, next) => {
    const {id} = req.params;
    const allCountries = await getAll();
    if (id) {
        let country = await allCountries.filter(e => e.cca3 === id);
        country.length ?
            res.status(200).json(country) :
            res.status(404).json(`el id ${cca3} no existe`)
    }
});

router.get('/activity', async (req, res, next) => {

});

router.post('/activity', async (req, res) => {
    let {
        name,
        dificultad,
        duracion,
        temporada,
    } = req.body;
    let activityCreated = await Activity.create({
        name,
        dificultad,
        duracion,
        temporada,
    });
    let countriesDB = await Country.findAll({
        where: {
            name: country
        }
    });
    activityCreated.addCountry(countriesDB)
    res.status(200).send('actividad creada')
})

module.exports = router;
*/
