const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Primeiro produto: ", (user) => {
    rl.question("Outro protudo: ", (pass) => {

            console.log("Seus Produtos São:", user, "e", pass)
            
        
        rl.close();

    })
})
