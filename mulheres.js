const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333;

const mulheres = [
    {
        nome: 'Simara Conçeição',
        imagem: '',
        minibio: 'Desenvolvedora e Instrutora',
    },
    {
        nome: 'Marina Lua Santos',
        imagem: '',
        minibio: 'Desenvolvedora e Instrutora', 
    },
    {
        nome: 'Camila dos Anjos',
        imagem: '',
        minibio: 'Desenvolvedora e Instrutora', 
    },
]

//sempre que uma função estiver relacionada a um verbo http, eu preciso passar esses parâmetros de request e response
function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta);
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)