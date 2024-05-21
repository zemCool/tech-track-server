const Router = require('express')
const router = new Router()
const equipmentController = require('../controllers/euipmentController');

router.post('/', equipmentController.create)
router.get('/', equipmentController.getAll)
router.get('/:id', equipmentController.getOne)
router.put('/:id', equipmentController.updateOne)
router.delete('/:id', equipmentController.deleteOne)

module.exports = router