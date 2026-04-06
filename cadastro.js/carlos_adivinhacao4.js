const readline = require("readline-sync");


let numero = Math.floor(Math.random() * 100) + 1;
let palpite;


while (true) {
    palpite = Number(readline.question("Digite um numero de 1 a 100: "));


    if (palpite < numero) {
        console.log("Muito baixo!");
    } else if (palpite > numero) {
        console.log("Muito alto!");
    } else {
        console.log("Parabéns! Você acertou!");
        break;
    }
}
