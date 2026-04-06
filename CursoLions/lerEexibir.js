

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('Seu Nome: ')
rl.prompt()

let entrada = ''

rl.on('line', (input) => {
    entrada = input.toString()
    console.log("Seu nome é " + entrada)
})