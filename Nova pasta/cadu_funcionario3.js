const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let livros = [];

function perguntar(texto) {
    return new Promise(resolve => rl.question(texto, resp => resolve(resp)));
}

// MENU
async function menu() {
    console.log("\n=== MENU LIVROS ===");
    console.log("1 - Cadastrar");
    console.log("2 - Listar");
    console.log("3 - Editar");
    console.log("4 - Excluir");
    console.log("0 - Sair");

    return await perguntar("Escolha: ");
}

// CADASTRAR
async function cadastrar() {
    let titulo = await perguntar("Título: ");
    let autor = await perguntar("Autor: ");

    let ano;
    while (true) {
        ano = Number(await perguntar("Ano: "));
        if (!isNaN(ano)) break;
        console.log("Digite um número válido!");
    }

    livros.push({ titulo, autor, ano });
    console.log("Livro cadastrado!");
}

// LISTAR
function listar() {
    if (livros.length === 0) {
        console.log("Nenhum livro cadastrado.");
        return;
    }

    livros.forEach((l, i) => {
        console.log(`${i} - ${l.titulo} | ${l.autor} | ${l.ano}`);
    });
}

// EDITAR
async function editar() {
    listar();
    let i = Number(await perguntar("Índice: "));

    if (isNaN(i) || !livros[i]) {
        console.log("Índice inválido!");
        return;
    }

    livros[i].titulo = await perguntar("Novo título: ");
    livros[i].autor = await perguntar("Novo autor: ");

    let ano;
    while (true) {
        ano = Number(await perguntar("Novo ano: "));
        if (!isNaN(ano)) break;
        console.log("Digite um número válido!");
    }

    livros[i].ano = ano;
    console.log("Atualizado!");
}

// EXCLUIR
async function excluir() {
    listar();
    let i = Number(await perguntar("Índice: "));

    if (isNaN(i) || !livros[i]) {
        console.log("Índice inválido!");
        return;
    }

    livros.splice(i, 1);
    console.log("Removido!");
}

// EXECUÇÃO
async function main() {
    while (true) {
        let op = await menu();

        if (op === "1") await cadastrar();
        else if (op === "2") listar();
        else if (op === "3") await editar();
        else if (op === "4") await excluir();
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