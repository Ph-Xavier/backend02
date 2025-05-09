const express = require('express')
const app = express()
const port = 3000


const login = require('./routes/loginRoutes')
const pessoa = require('./routes/pessoaRoutes')
const produto = require('./routes/produtosRoutes.js')

//Configurando recursos JSON
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', login)
app.use('/pessoa', pessoa)
app.use('/produtos', produto)

// instanciar o servidor
try {
    app.listen(port, () => {
        console.log(`Servidor Rodando na porta ${port}`)
    });
} catch (error) {
    console.log('Ocorreu um ERRO ao inicializar o servidor ')
}
