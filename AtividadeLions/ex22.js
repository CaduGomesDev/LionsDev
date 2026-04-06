 const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let carrinho = [];

rl.question("Nome do produto: ", (n1) => {
    rl.question("Preco: ", (p1) => {
        rl.question("Quantidade: ", (q1) => {

            carrinho.push({ nome: n1, preco: Number(p1), quantidade: Number(q1) });

            rl.question("Nome do produto: ", (n2) => {
                rl.question("Preco: ", (p2) => {
                    rl.question("Quantidade: ", (q2) => {

                        carrinho.push({ nome: n2, preco: Number(p2), quantidade: Number(q2) });

                        rl.question("Nome do produto: ", (n3) => {
                            rl.question("Preco: ", (p3) => {
                                rl.question("Quantidade: ", (q3) => {

                                    carrinho.push({ nome: n3, preco: Number(p3), quantidade: Number(q3) });

              console.log("\nCarrinho:")

                  let total = 0;

                  for (let i = 0; i < carrinho.length; i++) {
                       let item = carrinho[i];
                      let subtotal = item.preco * item.quantidade;
                        console.log(item.nome, item.preco, item.quantidade)

                                 total += subtotal;
                                    }

                                    console.log("Total da compra:", total)
                           rl.close()


                             })
                            })
                        })
                    })
                })
            })
        })
     })
})


