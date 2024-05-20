const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const brandRouter = require('./brandRouter')
const euipmentRouter = require('./euipmentRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/euipment', euipmentRouter)

module.exports = router