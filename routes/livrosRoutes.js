const express = require('express')

const router = express.Router()

const controllersLivros = require('../controllers/livrosControllers')

router.get('/', controllersLivros.getAll)

module.exports = router



