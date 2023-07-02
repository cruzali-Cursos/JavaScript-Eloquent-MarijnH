let miObjetoPersona = {
    Nombre: "Ali",
    Edad: 35,
    Ciudad: "Puebla",
    Salario: 5500
}




console.log("Estatus" in miObjetoPersona);
console.log("Ciudad" in miObjetoPersona);

delete miObjetoPersona.Salario;

miObjetoPersona.Sexo = "Masculino";

console.log(miObjetoPersona);
console.log("==========");

console.log(Object.keys(miObjetoPersona));

let newObject = {

};

console.log("Asignar un objeto a otro");
Object.assign(newObject, miObjetoPersona);

console.log(newObject);

console.log("Array de personas");

let arrPersonas = [
    {persona: miObjetoPersona},
    {persona: miObjetoPersona}
]

console.log(arrPersonas);

// El hombre ardilla - El diario del Licántropo

let diario = [];

function añadirEntrada(eventos, ardilla) {
    diario.push({eventos, ardilla});
}

console.log("diario: ", diario);
añadirEntrada(["trabajo", "toque un arbol", "pizza"], false);
añadirEntrada(["Trabajo", "Comida", "Estudiar", "Descansar"], false);
console.log(diario);

let arrNumeros = [0,2,5,7,9,6,4,2,1,8,3];
console.log("indexOf: ", arrNumeros.indexOf(2));

console.log("lastIndexOf: ", arrNumeros.lastIndexOf(2));

console.log("slice: ", arrNumeros.slice(3, 5));

console.log("slice: ", arrNumeros.slice(4));

console.log("slice: ", arrNumeros.slice());


console.log("padStart", String(6).padStart(5, "0"));

let oracion = "Los pajaros secretarios se especializan en pisotear";

console.log("Oracion original: ", oracion);
let palabras = oracion.split(" ");
console.log("palabras: ", palabras);

console.log("join: ", palabras.join(".").repeat(2));

function maximo(...numeros) {
    let resultado = -Infinity;

    for (let numero of numeros) {
        if (numero > resultado)
            resultado = numero;
    }
    return resultado;
}

console.log("Obten el máximo: ", maximo(4,8,5,4,-4,8,-0,5,7,9,15,-5));