// Imprime todos los numeros del 1 al 100 con dos excepciones.
// Numeros divisibles por 3 se escribe Fizz
// Numeros divisibles por 5 (y no por 3) se escribe Buzz
// Si son divisibles por 3 y por 5 entonces imprime FizzBuzz


function FizzBuzzOne()
{
    var i = 1;
    for (i = 1; i <= 100; i++)
    {
        if ((i % 3) === 0 && (i % 5) === 0)
        {
            console.log(i, " FizzBuzz");
            continue;
        }

        if ((i % 3) === 0)
        {
            console.log(i, " Fizz");
            continue;
        }

        if ((i % 5) === 0)
        {
            console.log(i, " Buzz");
            continue;
        }

        console.log(i);

    }
}

FizzBuzzOne();