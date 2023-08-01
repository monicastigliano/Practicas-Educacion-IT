let suma = 0;
let numeroActual;
do {
     numeroActual = Number(prompt('Ingrese el número actual'));
     suma = suma + numeroActual;
} while (confirm('¿Desea seguir ingresando números?'));
alert('Toal ingresado: ' + suma)