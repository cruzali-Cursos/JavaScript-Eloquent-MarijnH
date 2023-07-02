function mayorQue(n)
{
    return m => m > n;
}

let mayorQue10 = mayorQue(10);
console.log("mayorQue10", mayorQue10);
console.log(mayorQue10(11));

function ruidosa(funcion) {
    return (...argumentos) => {
        console.log("llamando con", argumentos);

        let resultado = funcion(...argumentos);
        console.log("llamada con", argumentos, ", retorno", resultado);
        return resultado;
    }
}


function repetir(n, accion)
{
    for (let i = 0; i < n; i++)
    {
        accion(i);
    }
}


console.log("Ruidosa");
ruidosa(Math.min)(3,2,1);

function aMenosQue(prueba, entonces) {
    if (!prueba) {
        entonces();
    }
}

repetir(4, n => {
    aMenosQue(n % 2 == 1, () => {
        console.log(n, "es par");
    });
});

console.log("foreach");
["A", "B", "C"].forEach(letra => console.log(letra));