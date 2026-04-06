const readline = require('readline-sync');

let alunos = [];
let opcao = 0;

while (opcao !== 3) {
    console.log('\n===== MENU =====');
    console.log('1 - Cadastrar Aluno');
    console.log('2 - Listar Alunos');
    console.log('3 - Sair');

    opcao = Number(readline.question('Escolha uma opcao: '));

    if (opcao === 1) {
        let nome = readline.question('Nome: ');
        let idade = Number(readline.question('Idade: '));
        let curso = readline.question('Curso: ');

        let aluno = {
            nome: nome,
            idade: idade,
            curso: curso
        };

        alunos.push(aluno);

        console.log('Aluno cadastrado com sucesso!');

    } else if (opcao === 2) {
        if (alunos.length === 0) {
            console.log('Nenhum aluno cadastrado.');
        } else {
            console.table(alunos);
        }

    } else if (opcao === 3) {
        console.log('Encerrando o programa...');
    } else {
        console.log('Opcao invalida!');
    }
}
