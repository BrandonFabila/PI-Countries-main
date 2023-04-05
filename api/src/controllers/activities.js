const { Activity, Country } = require('../db.js')

const getActivities = async( req, res ) => {
    try {
        const activities = await Activity.findAll({  // get para el select en el front que ordena por actividades
            include: Country,
        });
        if (activities[0] == null) {
            return res.status(404).json('❌ No existen actividades en la DB ❌')
        } else {
            return res.status(200).json(activities) 
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}

const createActivity = async ( req, res ) => {
    const { name, dificultad, duracion, temporada, idpais} = req.body
    //busca nombre de actividad en tabla Activity
    const activityVerified = await Activity.findOne({where: { name: name}})
    try {
        if ( name == null || dificultad == null || duracion  == null || temporada == null || idpais == null ) {
            return res.status(400).json('❌ Inserta todos los parametros ❌')
        } else {
            //si existe la actividad
            if (activityVerified) {
                //almacena el string en un arr
                const idsArr = idpais.split(', ');
                //se añade un map dentro de una promesa para esperar a que se resuelvan todad las promesas antes de continuar
                const idsvalid = await Promise.all(idsArr.map(async (idCountry) => {
                    //verifica cada id
                    const verifiedid = await Country.findByPk(idCountry.toUpperCase());
                    //si es invalido retorna el id y si no lo deja nulo en el array
                    if (verifiedid == null) {
                      return idCountry.toUpperCase();
                    }
                    //añade cada actividad verificada
                    await activityVerified.addCountry(verifiedid);
                }));
                //filtra de los valores en el array que tienen un valor nulo
                const invalidIds = idsvalid.filter((id) => id != null);
                if ( invalidIds.length == 0 ) {
                    return res.status(201).json(`✔ Paises añadidos correctamente a la actividad ${name} ✔`)
                }
                if (invalidIds.length == 1) {
                    return res.status(400).json(`❌ Verifica el id ${invalidIds} ❌`);
                } else {
                    return res.status(400).json(`❌ Verifica los id ${invalidIds} ❌`);
                }
                
            } else {
                //crea la actividad
                const newAct = await Activity.create({ 
                    name, 
                    dificultad, 
                    duracion, 
                    temporada,
                });
                //almacena el string en un arr
                const idsArr = idpais.split(', ');
                //se añade un map dentro de una promesa para esperar a que se resuelvan todad las promesas antes de continuar
                const idsvalid = await Promise.all(idsArr.map(async (idCountry) => {
                    //verifica cada id
                    const verifiedid = await Country.findByPk(idCountry.toUpperCase());
                    //si es invalido retorna el id y si no lo deja nulo en el array
                    if (verifiedid == null) {
                      return idCountry.toUpperCase();
                    }
                    //añade cada actividad verificada
                    await newAct.addCountry(verifiedid);
                }));
                //filtra de los valores en el array que tienen un valor nulo
                const invalidIds = idsvalid.filter((id) => id != null);
                if (invalidIds.length == 0) {
                    return res.status(201).json('✔ Actividad creada correctamente ✔')
                }
                if (invalidIds.length == 1) {
                    return res.status(400).json(`✔ Actividad creada correctamente ✔ - ❌ Verifica el id ${invalidIds} ❌`);
                } else {
                    return res.status(400).json(`✔ Actividad creada correctamente ✔ - ❌ Verifica los id ${invalidIds} ❌`);
                }
            }
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteActivity = async ( req, res ) => {
    const { name, idpais } = req.body
    const activityVerified = await Activity.findOne({where: { name: name}})
    try{
        //si no es valida la actividad
        if (!activityVerified) {
            return res.status(404).json(`❌ Verifica la actividad ❌`)
        } else {
            //si tenemos actividad y pais
            if (activityVerified && idpais) {
                const verifiedid = await Country.findByPk(idpais.toUpperCase());
                if(idpais.length < 3) {
                    //si el pais es valido lo elimina de la actividad
                    if ( verifiedid ) {
                        await activityVerified.removeCountry(verifiedid)
                        return res.status(200).json('País eliminado de la actividad');
                    } else {

                    }
                } else {
                    //almacena el string en un arr
                    const idsArr = idpais.split(', ');
                    //se añade un map dentro de una promesa para esperar a que se resuelvan todad las promesas antes de continuar
                    const idsvalid = await Promise.all(idsArr.map(async (idCountry) => {
                        //verifica cada id
                        const verifiedid = await Country.findByPk(idCountry.toUpperCase());
                        //si es invalido retorna el id y si no lo deja nulo en el array
                        if (verifiedid == null) {
                          return idCountry.toUpperCase();
                        }
                        //añade cada actividad verificada
                        await activityVerified.removeCountry(verifiedid);
                    }));
                    //filtra de los valores en el array que tienen un valor nulo
                    const invalidIds = idsvalid.filter((id) => id != null);
                    if (invalidIds.length == 0) {
                        return res.status(201).json('✔ paises eliminados correctamente ✔')
                    }
                    if (invalidIds.length == 1) {
                        return res.status(400).json(`❌ Verifica el id ${invalidIds} ❌`);
                    } else {
                        return res.status(400).json(`❌ Verifica los id ${invalidIds} ❌`);
                    } 
                }  
            }
            //si tenemos actividad verificada pero no se ha pasado id de pais
            if(activityVerified && !idpais) {
                await activityVerified.destroy()
                return res.status(204).send('ok')
            }
        }
    } catch (eror) {
        res.status(500).json(eror)
    }


}

module.exports = { getActivities, createActivity, deleteActivity }