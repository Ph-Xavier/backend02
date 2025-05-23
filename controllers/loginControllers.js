loginModels = require('../models/loginModels')

module.exports = {
    login,
    validarPSW,
}

function login(req, res) {
    console.log('Carregando página de Login!!!');
    res.render('login.ejs', {
        title: "Login do Sistema",
        mensagem: "Informe a senha do usuário"
    });
}


function validarPSW(req, res){
    console.log('\nControllers - Validar Usuário e Senha na Model...')
    m_dados = req.body
    console.log("Dados: ", m_dados)
    m_usuario = req.body.login
    m_senha = req.body.senha
    console.log("Usuário: ", m_usuario)
    console.log("Senha..: ", m_senha)
    loginModels.validarPSW(m_usuario, m_senha, function(err, resultado){
        if(err){
            throw err;
        }else if (resultado[0].usu_apelido == m_usuario && resultado[0].usu_password == m_senha) {
            console.log("Usuário: ", resultado[0].usu_apelido)
            console.log("Senha..: ", resultado[0].usu_password)
            res.render('index.ejs', {
                title: "PI",
            })
        }else {
            console.log('Dados inválidos!')
            return res.json(resultado)
        }
    })
}