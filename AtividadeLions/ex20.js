const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Nota 1: ", (n1) => {
 rl.question("Nota 2: ", (n2) => {
      rl.question("Nota 3: ", (n3) => {
         
                let media = (Number(n1) + Number(n2) + Number(n3)) / 3;

                console.log("Media:", media);

                if (media >= 7) {
                    console.log("Aprovado");
                } else if (media >= 5) {
                    console.log("Recuperacao");
                } else {
                    console.log("Reprovado");
                }
             rl.close();

            S
        });
    });
});
