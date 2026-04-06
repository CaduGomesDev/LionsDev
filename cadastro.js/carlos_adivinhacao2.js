const readline = require("readline-sync");


let opcoes = ["Pedra", "Papel", "Tesoura"];


let escolhaUsuario = readline.question("Escolha (Pedra, Papel ou Tesoura): ");
let escolhaComputador = opcoes[Math.floor(Math.random() * 3)];


let resultado = "";


if (escolhaUsuario === escolhaComputador) {
    resultado = "Empate";
} else if (
    (escolhaUsuario === "Pedra" && escolhaComputador === "Tesoura") ||
    (escolhaUsuario === "Papel" && escolhaComputador === "Pedra") ||
    (escolhaUsuario === "Tesoura" && escolhaComputador === "Papel")
) {
    resultado = "Você venceu!";
} else {
    resultado = "Você perdeu!";
}


console.log("Computador:", escolhaComputador);
console.log("Resultado:", resultado);
