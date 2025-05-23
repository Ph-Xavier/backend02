const conexao = require('../config/conexao.js');

console.log('Acessando Models dos Produtos...')

module.exports = {
    validarPSW,
}

function validarPSW(p_login, p_senha, callback){
    console.log("Model Login...")
    msql = `SELECT * FROM Usuarios WHERE usu_apelido = "${p_login}" AND usu_password = "${p_senha}"`
    console.log(msql)
    conexao.query(msql, callback)
}