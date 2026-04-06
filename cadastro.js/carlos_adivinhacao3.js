const readline = require("readline-sync");


let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";


let tamanho = Number(readline.question("Tamanho da senha: "));
let senha = "";


for (let i = 0; i < tamanho; i++) {
    let aleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres.charAt(aleatorio);
}


console.log("Senha gerada:", senha);
