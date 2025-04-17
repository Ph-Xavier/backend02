const livrosModels = require('../models/livrosModels.js')

module.exports = {
    getAll

}

function getAll(req, res){
    console.log('\nControllers - iniciando a localização dos livros na Model...')
    livrosModels.getAll(function(err, resultado){
        if(err){
            throw err;
        } else {
            console.log('Retornando da Model Livros...')
            console.log('Resultado: ', resultado)
            return res.json(resultado)
        }
    })
}

