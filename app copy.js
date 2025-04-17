const express = require('express')
var app = express()
const port = 3000

const index = require('./routes/indexRoutes')

app.use('/', index)

const pessoa = require('./pessoa.json')
console.log(pessoa)

// bloco de chamada das rotas do projeto
// app.get('/', (req, res) =>{
//     console.log('Rota Raiz Encontrada!!!')
//     res.send('<h3>Rota Raiz Encontrada!!</h3>')
// })

// app.get('/sobre', (req, res) =>{
//     console.log('Rota Sobre Nossa Empresa Encontrada!')
//     res.send('<h3>Conheça nossos Serviços de TI!</h3>')
// })

// app.get('/contato', (req, res) =>{
//     console.log('Rota Contatos Encontrada!!!')
//     res.render('contato.ejs', {
//         title: 'Contato'
//     })
// })

app.get('/pessoa', (req, res) =>{
    console.log('Lendo Dados de Pessoa!')
    return res.json(pessoa)
})

app.get('/pessoa/:cod', (req, res) =>{
    let codigo = req.params.cod
    console.log('Lendo \n ', pessoa[codigo])
    return res.json(pessoa[codigo])
})


// app.get('*', (req, res) =>{
//     console.log('Página Não Encontrada - 404!')
//     res.send('<h3>Página Não Encontrada!</h3><p>ERRO 404!</p>')
// })

// instanciar o servidor
try {
    app.listen(port, () => {
        console.log(`Servidor Rodando na porta ${port}`)
    });
} catch (error) {
    console.log('Ocorreu um ERRO ao inicializar o servidor ')    
}

