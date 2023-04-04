const { Router } = require('express');
const router = Router();
const { getActivities, createActivity } = require('../controllers/activities.js')

router.get('/', getActivities )
router.post('/', createActivity )

module.exports = router;