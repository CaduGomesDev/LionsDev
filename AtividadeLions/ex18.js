const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let tarefas = [];

rl.question("Tarefa 1: ", (t1) => {
    tarefas.push(t1);

    rl.question("Tarefa 2: ", (t2) => {
        tarefas.push(t2);

        rl.question("Tarefa 3: ", (t3) => {
            tarefas.push(t3);

            rl.question("Tarefa 4: ", (t4) => {
                tarefas.push(t4);

                    rl.question("Tarefa 5: ", (t5) => {
                        tarefas.push(t5);

                        console.log("\nLista:");
                        for (let i = 0; i < tarefas.length; i++) {
                            console.log((i+1) + " - " + tarefas[i]);
                        }

                        rl.close();
                })
            })
        })
    })
})
