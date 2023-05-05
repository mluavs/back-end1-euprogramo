// estrutura básica de um servidor

const express = require('express') // express que tá vindo do node

const app = express()
const porta = 3333; // porta, que é onde os dados vão estar

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta);
} // função que mostra a porta

app.listen(porta, mostraPorta)
// servidor escutando a porta
//o que eu estou dizendo é: computador, após você ouvir a porta do número 3333, que é o que tá guardado ali na const, eu quero que você execute a função mostraPorta