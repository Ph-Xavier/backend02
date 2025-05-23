const express = require('express')

const router = express.Router() 

const controllersLogin = require('../controllers/loginControllers')

router.get('/', controllersLogin.login)
router.post('/validar', controllersLogin.validarPSW)

module.exports = router
 