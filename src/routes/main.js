let express = require('express')
let router = express.Router()
let controller = require('../controllers/mainController')
const userAcces = require('../middlewares/userAcces')

router.get('/main', controller.index)

router.get('/admin', userAcces, controller.admin)

router.get('/register', controller.register)

router.post('/register', controller.user )

router.get('/result', controller.result)

module.exports = router