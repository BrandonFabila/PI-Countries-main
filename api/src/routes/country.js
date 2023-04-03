const { Router } = require('express');
const router = Router();
const { Sequelize } = require('sequelize')
const { Country, Activity } = require('../db')

router.get('/getpoblacion', async (req, res) => {
    try {
        const { numero } = req.query;
        const countries = await Country.findAll({
            where: {
                poblacion: numero 
            }
        })
        res.json(countries)
    }
    catch (error) {
        res.send(error)
    }
})


router.get('/', async (req, res) => {
    try {
        const {name} = req.query;
        if (name) {
            let upperName = name.charAt(0).toUpperCase() + name.slice(1)
            const countries = await Country.findAll({
                where: {
                    name: { [Sequelize.Op.iLike]: `%${upperName}%` }
                },
                include: Activity  //include para hacer el join de las tablas
                })
                return countries ? res.json(countries) : res.sendStatus(404).json('ok')
            }
        else {
            const allCountries = await Country.findAll({
                include: Activity
            })
            return  res.json(allCountries);
        }
    } catch (error) {
        res.send(error)
    }
})

router.get('/:idpais', async (req, res) => {
    try {
        const {idpais} = req.params;
        //busca por primary key
        const country = await Country.findByPk(idpais.toUpperCase(), {
            include: Activity
        });
        res.json(country || 'Lo sentimos, id inexistente')
    } catch (error) {
        res.send(error)
    }
})






module.exports = router;