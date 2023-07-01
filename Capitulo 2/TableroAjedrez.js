

function TableroOne(tamaño)
{
    let linea = '';
    let i = 1;
    for (i = 1; i <= tamaño; i++)
    {
        for (j = 1; j <= tamaño; j++)
        {
            if ((i % 2) == 0)
            {
                linea = linea + "# ";
                
            } else {
                linea = linea + " #";
            }
        }
        linea = linea + "\n";
    }

    console.log(linea);
}

TableroOne(15);

