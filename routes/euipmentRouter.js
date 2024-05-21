const Router = require('express')
const router = new Router()
const equipmentController = require('../controllers/euipmentController');
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), equipmentController.create)
router.get('/', equipmentController.getAll)
router.get('/:id', equipmentController.getOne)
router.put('/:id', checkRole('ADMIN'), equipmentController.updateOne)
router.delete('/:id',checkRole('ADMIN'), equipmentController.deleteOne)

module.exports = router