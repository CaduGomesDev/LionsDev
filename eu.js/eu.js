
//EXEMPLO1
/*let numero = 10

if (numero > 10 && numero < 50) {
    console.log("Esta dentro do Intervalo")
}
else {
    console.log("Esta fora Do Intervalo")
}

//EXEMPLO2

let Saldo = 100
let ProdutoUnidade = true
let ProdutoValor = 90

if (Saldo >= ProdutoValor && ProdutoUnidade === true){
    console.log ("Produto Pode ser comprado")
}
else {
    console.log("Produto Nao pode ser Comprado")
}

//EXEMPLO3

/*const idade = 16
const Titulo = true

if (idade >= 16 || Titulo === true){
    console.log ("Pode votar")
}
else {
    console.log("Nn pode votar")
}

//EXEMPLO4

let entradaUsuario = ''
process.stdin.on('data', function (data){
entradaUsuario = data.tostring();
console.log('voce digitou; ' entradaUsario);
}
//EXEMPL5
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

//EXEMPLO6

const numero = [6,4,10]

let maior;

if (numero[0] < numero[1]) {
    maior = numero [1]

}
else {
    maior = numero[0]
}
if(numero[2] > maior){
    maior = numero[2]
}
console.log(maior)

CONTEUDO

push adiciona o Ultimo
pop remove o ultimo
shift remove o primeiro
unshift adiciona o primerio
splice remove um elemneto especifico
includes verificar se um determinado valor existe em uma array
indexOf qual indice especifico de um determinado valor 
length qual o tamanho do seu array
perseFloat transformando a entrada/string do usuario em um number

todos sao usados juntos com a variavel

FIMCONTEUDO

const personagem = ['fiona', 'sherk', 'rato', 'Aranha']
console.log (personagem.length)

concatenar

console.log("boa noite, " +  nome)
console.log('Boa noite, ${nome}) */



/*const MinhaMesa = ['Cadu', 'joao', 'Maria', 'jose']

console.log(`meu nome é ${MinhaMesa[0]}, meu colegas sao: ${MinhaMesa[1]}, ${MinhaMesa[2]}, ${MinhaMesa[3]}`



const readline = require ("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const listaTarefa = []

rl.question ("Digite a sua primeira tarefa:", (input1) => {
    listaTarefa.push(input1);


    rl.question ("Digite sua segunda tarefa: ", (input2) => {
    listaTarefa.push(input2);
        

        rl.question ("Digite sua terceira tarefa: ", (input3) => {
       listaTarefa.push(input3);
            console.log(`vc tem essas tarefa ${listaTarefa}`)
            listaTarefa.pop()

            console.log(`Voce realizou a ultima tarefa agora restam ${listaTarefa.length} a serem feita`)

        rl.close()
    })
})
} )

//Objetos

    let Pintura = {
    nomePintura: "O grito"
    nomeArtista: "Edvard"
    ano: 1893,
    signifcado: "Demosntra Angustia"
    
}

    console.log(`A minha pintura favorita ${nomePintura} de ${nomeArtista} do ano ${ano}, significado é ${signifcado}`)

    
let pessoa = {
    idade: 18
    nome: "Cadu Gomes"
    CidadeNascimento: "Zimba"
}

for (let i = 0; i < 5; i++){
    console.log(i)
}

let horas = 11
while(horas < 12){
    console.log(horas)
        horas ++
    
}

//forEach precisa de array

//atividade 04

let temperaturaAgua = 90
while (temperaturaAgua < 100){
   console.log(`A temperatura esta á ${temperaturaAgua}`)
   temperaturaAgua++
   
}
console.log(`A tempetura agora esta ${temperaturaAgua}`)

//atividade 05*/

//switch break parar o switch

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual genero de filme: ", (genero) => {


switch(genero){
    case "acao":
        console.log("Sala 1")

        break
    case "comedia":
        console.log("Sala 2")

        break
    case "terror":
        console.log("Sala 3")
        
        break
    case "animaçao":
        console.log("Sala 4")

        break
    default:
        console.log("Gênero nao encontrado")

    }

    rl.close()

})

