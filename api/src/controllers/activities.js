const { Activity, Country } = require('../db.js')

const getActivities = async( req, res ) => {
    try {
        const activities = await Activity.findAll({  // get para el select en el front que ordena por actividades
            include: Country,
        });
        if (activities[0] == null) {
            res.status(404).json('❌ No existen actividades en la DB ❌')
        } else {
            res.status(200).json(activities) 
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

const createActivity = async ( req, res ) => {
    const { name, dificultad, duracion, temporada, idpais} = req.body
    //busca nombre de actividad en tabla Activity
    const activityVerified = await Activity.findOne({where: { name: name}})
    //busca el id del pais en la tabla Country
    const pais = await Country.findByPk(idpais.toUpperCase())
    try {
        if ( name == null || dificultad == null || duracion  == null || temporada == null || idpais == null ) {
            res.status(400).json('❌ Inserta todos los parametros ❌')
        }
        if (pais == null) {
            res.status(400).json('❌ Verifica el id ❌')
        }
        if (activityVerified && pais !== null) {
            // '❌ La actividad ya existe ❌'
            
            res.status(400).json(activityVerified)
        }
        else {
            //crea en tabla de db
            const newActivity = await Activity.create({
                name,
                dificultad,
                duracion,
                temporada,
            });
            //busca un pais donde el id sea el ingresado
            const pushCountry = await Country.findOne({
            where: {
                id: idpais,
            }
            })
            //actividad
            await newActivity.addCountry(pushCountry)  //mixing sequelize add + nombreTabla
            res.status(201).json('✔ Creado correctamente ✔')
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { getActivities, createActivity }