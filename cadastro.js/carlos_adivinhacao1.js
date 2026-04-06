const readline = require ("readline-sync")

let lados = Number(readline.question("quantos lados o dado tem? "))
let resultado = Math.floor(Math.random() * lados) + 1 
console.log("Resultado:", resultado)