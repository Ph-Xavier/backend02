const conexao = require('../config/conexao.js');

console.log('Acessando Models dos Produtos...')

module.exports = {
    getAll,
    getById,
    create,
}

function getAll(callback){
    console.log("Model Produtos")
    msql = 'SELECT * FROM tblprodutos'
    conexao.query(msql, callback)
}

function getById(codigo, callback){
    console.log("Model Produtos Get - ById")
    msql = 'SELECT * FROM tblprodutos WHERE id_produto =  ' + codigo
    conexao.query(msql, callback)
}

function create(dados, callback){
    console.log("Model Produtos - Create")
    msql = 'INSERT INTO tblprodutos SET ? '
    conexao.query(msql, dados, callback)
}
