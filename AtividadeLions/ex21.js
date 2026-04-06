const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let contatos = [];

rl.question("Nome: ", (n1) => {
    rl.question("Telefone: ", (t1) => {
       rl.question("Cidade: ", (c1) => {

            contatos.push({ nome: n1, telefone: t1, cidade: c1 });
            rl.question("Nome: ", (n2) => {
                rl.question("Telefone: ", (t2) => {
                rl.question("Cidade: ", (c2) => {

                    contatos.push({ nome: n2, telefone: t2, cidade: c2 });

                    rl.question("Nome: ", (n3) => {
                            rl.question("Telefone: ", (t3) => {
                                rl.question("Cidade: ", (c3) => {
                               contatos.push({ nome: n3, telefone: t3, cidade: c3 });

                                    console.log("\nContatos:");
                                    for (let i = 0; i < contatos.length; i++) {
                                        console.log(contatos[i].nome, contatos[i].telefone, contatos[i].cidade);
                                    }

                                    rl.close();
                              })
                            })
                        })

                    })
                 })
            })
        })
    })
})
