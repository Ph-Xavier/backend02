const express = require('express')

const router = express.Router() 

const controllersLogin = require('../controllers/loginControllers')

router.get('/', controllersLogin.login)

module.exports = router
