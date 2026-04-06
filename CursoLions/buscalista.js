let numeros = [5, 10, 30]
let numero = 5

let encontrado = false

for (let i = 0; i < numeros.lenght; i++){
    if (numeros[i] === numero ) {
             encontrado = true;
    }
}
if(encontrado){
    console.log("Numero encontrado na lista")
}
else{
 console.log("Numero ñ encontrado")
}

