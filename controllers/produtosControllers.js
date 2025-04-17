const produtosModels = require('../models/produtosModels.js')

module.exports = {
    getAll,
    getById,
    create,

}

function getAll(req, res){
    console.log('\nControllers - iniciando a localização dos produtos na Model...')
    produtosModels.getAll(function(err, resultado){
        if(err){
            throw err;
        } else {
            console.log('Retornando da Model Produtos...')
            console.log('Resultado: ', resultado)
            return res.json(resultado)
        }
    })
}

function getById(req, res){
    let cod = req.params.id
    console.log('\nControllers - iniciando a localização do produto na Model...')
    produtosModels.getById(cod, function(err, resultado){
        if(err){
            throw err;
        } else {
            console.log('Retornando da Model Produto...')
            console.log('Resultado: ', resultado)
            return res.json(resultado)
        }
    })
}

function create(req, res){
    let dados = req.body
    console.log('\nControllers - Adicionando Registro...')
    produtosModels.create(dados, function(err, resultado){
        if(err){
            throw err;
        } else {
            console.log('Retornando da Model Produto...')
            console.log('Resultado: ', resultado)
            return res.json(resultado)
        }
    })
}
