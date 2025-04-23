const conexao = require('../config/conexao.js');

console.log('Acessando Models dos Produtos...')

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
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

function update(dados, codigo, callback){
    console.log("Model Produtos - Up-date")
    msql = 'UPDATE tblprodutos SET ? WHERE id_produto =  ' + codigo
    conexao.query(msql, dados, (erro, callback) => {
        if(erro) {
            throw erro
        } else {
            console.log("Registro " + codigo + " Atualizado...")
        }
    })
}

function remove(codigo, callback){
    console.log("Model Produtos - Delete")
    msql = 'DELETE FROM tblprodutos WHERE id_produto =  ' + codigo
    conexao.query(msql, callback)
}
