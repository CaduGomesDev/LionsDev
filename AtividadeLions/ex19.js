const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let saldo = 1000;

rl.question("Valor do saque: ", (valor) => {

    let saque = Number(valor);

    if (saque <= saldo) {
        saldo -= saque;
        console.log("Saque realizado");
        console.log("Saldo:", saldo);
    } else {
        console.log("Saldo insuficiente");
    }

    rl.close();
})
