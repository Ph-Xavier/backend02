module.exports = {
    login,
}

function login(req, res) {
    console.log('Carregando página de Login!!!');
    res.render('login.ejs', {
        title: "Login do Sistema",
        mensagem: "Informe a senha do usuário"
    });
}
