
//el resultado final será:
// ************************************************
// Hola, User, bienvenido a nuestra aplicación.

//              Nombre Apellido Edad
//               Juan   Pablo    40
//               Ana    García   25
//               María  Zarate   34
// ************************************************

var nombre = prompt('Cuál es su su nombre de usuario');
        enunciado.innerHTML = 'Hola ' + nombre + ', bienvenido/a a nuestra aplicación.';
var array_empleados = [
    {'nombre':'Juan', 'apellido': 'Pedro', 'edad': 40},
    {'nombre':'Ana', 'apellido': 'García', 'edad': 25},
    {'nombre':'María', 'apellido': 'Zarate', 'edad': 34}
];
var tabla = document.querySelector('table');
for (let i = 0; i < array_empleados.length; i++) {
    tabla.innerHTML += '<tr> <td>' + array_empleados[i].nombre + 
    '</td> <td>' + array_empleados[i].apellido +'</td> <td>' + array_empleados[i].edad +'</td></tr>' 
}

// M4-Laboratorio Dos

// Ejercicio 1
// Se generará el siguiente formulario:

// nombre apellido edad boton(Agregar)

// Agregaremos con value los elementos de cada
// uno de las cajas y lo sumaremos al arreglo de
// empleados


let nombre_input = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let edad = document.getElementById('edad');
let boton_agregar = document.getElementById('boton_agregar');
 
boton_agregar.onclick = function(e){
    array_empleados.push({'nombre': nombre_input.value, 'apellido': apellido.value, 'edad': edad.value})
    tabla.innerHTML = ''
    for (let i = 0; i < array_empleados.length; i++) {
        tabla.innerHTML += '<tr> <td>' + array_empleados[i].nombre + 
        '</td> <td>' + array_empleados[i].apellido +'</td> <td>' + array_empleados[i].edad +'</td></tr>' 
    }
    nombre_input.value = '';
    apellido.value = '';
    edad.value = '';
    e.preventDefault();
 }
