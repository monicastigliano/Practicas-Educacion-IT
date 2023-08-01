var numeroActual = 0;
do {
    var numeroActual = Number(prompt('Ingrese el número actual'));
    var suma = suma + numeroActual;
} while ((continuar = confirm('¿Desea seguir ingresando números?')));
alert('Total ingresado: ' + suma)

