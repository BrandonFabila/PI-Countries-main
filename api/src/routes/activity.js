const { Router } = require('express');
const router = Router();
const { getActivities, createActivity, deleteActivity } = require('../controllers/activities.js')

router.get('/', getActivities )
router.post('/', createActivity )
router.delete('/', deleteActivity )

module.exports = router;