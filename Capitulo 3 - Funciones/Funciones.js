const dividirEnDos = function(numero) {
    return numero / 2;
}

let numero = 10;
console.log(dividirEnDos(100));


// Clausulas
console.log("============== CLAUSULAS ==============")

const functionPadre = () => {
    let val = 2;
    console.log(val);

    const functionHija = () => {
        console.log(val += 1);
    }

    return functionHija;
}

const resultado = functionPadre();
console.log(resultado);
resultado();
resultado();
resultado();
