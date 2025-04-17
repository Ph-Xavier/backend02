const conexao = require('../config/conexao.js');

console.log('Acessando Models dos Livros...')

module.exports = {
    getAll

}

function getAll(callback) {
    msql = 'SELECT * FROM livros ';
    conexao.query(msql, callback)
}

