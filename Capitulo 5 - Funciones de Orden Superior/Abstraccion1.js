
function repetir(n, accion)
{
    for (let i = 0; i < n; i++)
    {
        accion(i);
    }
}

repetir(2, console.log);

let etiquetas = [];
repetir(5, l => 
    { 
        etiquetas.push(`Unidad ${l + 1}`);
    });

console.log(etiquetas);