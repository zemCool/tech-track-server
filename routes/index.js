const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const brandRouter = require('./brandRouter')
const euipmentRouter = require('./euipmentRouter')
const alertsRouter = require('./alertsRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/euipment', euipmentRouter)
router.use('/alerts', alertsRouter)

module.exports = router