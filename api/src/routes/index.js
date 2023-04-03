const { Router } = require('express');
// Importar todos los routers;
const countryRoute = require('./country')
const activityRoute = require('./activity')

const router = Router();

// Configurar los routers
router.use('/countries', countryRoute)
router.use('/activities', activityRoute)

module.exports = router;