const express = require('express')

const router = express.Router()

const controllersProdutos = require('../controllers/produtosControllers')

router.get('/', controllersProdutos.getAll)
router.get('/:id', controllersProdutos.getById)
router.post('/', controllersProdutos.create)

module.exports = router
