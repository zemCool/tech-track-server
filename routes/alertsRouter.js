const Router = require('express')
const router = new Router()
const alertsController = require('../controllers/alertsController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/', checkRole('ADMIN'), alertsController.getAll)

module.exports = router