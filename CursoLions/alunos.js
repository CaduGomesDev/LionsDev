/*let alunos = []

alunos.push(["Cadu", 18, "LionsDev"])
alunos.push(["Jose", 19, "Adm"])

for (let i = 0; i < alunos.length; i++) {

    console.log("Nome:", alunos[i][0])
    console.log("Idade:", alunos[i][1])
    console.log("Curso:", alunos[i][2])
    console.log("---------")
}
*/
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let alunos = []


rl.question("Digite o aluno: ", (nome) => {
    rl.question("Digite a idade: ", (idade) => {
        rl.question("Digite o curso: ", (curso) => {

            alunos.push([nome, idade, curso])

            console.log("\nAluno cadastrado!")
            console.log("------------")

            for (let i = 0; i < alunos.length; i++) {
                console.log("Nome:", alunos[i][0])
                console.log("Idade:", alunos[i][1])
                console.log("Curso:", alunos[i][2])
                console.log("---------")
            }

            rl.close()
        })
    })
})