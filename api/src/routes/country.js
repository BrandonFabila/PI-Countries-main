const { Router } = require('express');
const router = Router();
const { getCountries, getCountriesByID } = require("../controllers/countries.js")


router.get('/', getCountries )
router.get('/:idpais', getCountriesByID )


module.exports = router;