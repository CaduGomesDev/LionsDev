const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let funcionarios = [];

// função de input
function perguntar(texto) {
    return new Promise(resolve => rl.question(texto, resp => resolve(resp)));
}

// MENU
async function menu() {
    console.log("\n=== MENU FUNCIONÁRIOS ===");
    console.log("1 - Cadastrar");
    console.log("2 - Listar");
    console.log("3 - Maior salário");
    console.log("4 - Menor salário");
    console.log("5 - Editar");
    console.log("6 - Excluir");
    console.log("0 - Sair");

    return await perguntar("Escolha: ");
}

// CADASTRAR
async function cadastrar() {
    let nome = await perguntar("Nome: ");
    let cargo = await perguntar("Cargo: ");

    let salario;
    while (true) {
        salario = Number(await perguntar("Salário: "));
        if (!isNaN(salario)) break;
        console.log("Digite um número válido!");
    }

    funcionarios.push({ nome, cargo, salario });
    console.log("Funcionário cadastrado!");
}

// LISTAR
function listar() {
    if (funcionarios.length === 0) {
        console.log("Nenhum funcionário cadastrado.");
        return;
    }

    funcionarios.forEach((f, i) => {
        console.log(`${i} - ${f.nome} | ${f.cargo} | ${f.salario}`);
    });
}

// MAIOR SALÁRIO
function maiorSalario() {
    if (funcionarios.length === 0) return console.log("Lista vazia.");

    let maior = funcionarios.reduce((a, b) => a.salario > b.salario ? a : b);
    console.log("Maior salário:", maior);
}

// MENOR SALÁRIO
function menorSalario() {
    if (funcionarios.length === 0) return console.log("Lista vazia.");

    let menor = funcionarios.reduce((a, b) => a.salario < b.salario ? a : b);
    console.log("Menor salário:", menor);
}

// EDITAR
async function editar() {
    listar();
    let i = Number(await perguntar("Índice: "));

    if (isNaN(i) || !funcionarios[i]) {
        console.log("Índice inválido!");
        return;
    }

    funcionarios[i].nome = await perguntar("Novo nome: ");
    funcionarios[i].cargo = await perguntar("Novo cargo: ");

    let salario;
    while (true) {
        salario = Number(await perguntar("Novo salário: "));
        if (!isNaN(salario)) break;
        console.log("Digite um número válido!");
    }

    funcionarios[i].salario = salario;
    console.log("Atualizado com sucesso!");
}

// EXCLUIR
async function excluir() {
    listar();
    let i = Number(await perguntar("Índice para excluir: "));

    if (isNaN(i) || !funcionarios[i]) {
        console.log("Índice inválido!");
        return;
    }

    funcionarios.splice(i, 1);
    console.log("Funcionário removido!");
}

// EXECUÇÃO
async function main() {
    while (true) {
        let op = await menu();

        if (op === "1") await cadastrar();
        else if (op === "2") listar();
        else if (op === "3") maiorSalario();
        else if (op === "4") menorSalario();
        else if (op === "5") await editar();
        else if (op === "6") await excluir();
        else if (op === "0") {
            console.log("Saindo...");
            rl.close();
            break;
        } else {
            console.log("Opção inválida!");
        }
    }
}

main();