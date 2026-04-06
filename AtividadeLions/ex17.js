const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Usuario: ", (user) => {
rl.question("Senha: ", (pass) => {

        if (user === "admin" && pass === "1234") {
            console.log("Login correto");
        } else {
            console.log("Erro no login");
        }

     rl.close();
     
    })
})
