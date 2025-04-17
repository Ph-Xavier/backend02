module.exports = {
    index,
    sobre,
    contato,
    notFound    
}

function index(req, res) {
    console.log('Rota Raiz Encontrada!!!')
    res.send('<h3>Rota Raiz Encontrada!! <br> Olá Mundo! </h3>')
}

function sobre(req, res) {
    console.log('Rota Sobre Nossa Empresa Encontrada!')
    res.send('<h3>Conheça nossos Serviços de TI!</h3>')
}

function contato(req, res) {
    console.log('Rota Contatos Encontrada!!!')
    res.render('contato.ejs', {
        title: 'Contato'
    })
}

function notFound(req, res) {
    console.log('Página Não Encontrada - 404!')
    res.send('<h3>Página Não Encontrada!</h3><p>ERRO 404!</p>')
}
