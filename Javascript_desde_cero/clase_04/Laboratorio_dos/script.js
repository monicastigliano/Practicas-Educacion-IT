// Ejercicio 1

// A partir del Laboratorio adicional 2 del módulo
// anterior, realizar los siguientes pasos:
// 1. Generar un arreglo de empleados donde
// indicaremos su nombre, apellido y edad.
// 2. Mostrar los datos en una tabla iterando el
// arreglo. La tabla se mostrará así:

//              Nombre Apellido Edad
//               Juan   Pablo    40
//               Ana    García   25
//               María  Zarate   34

// 3. Antes de mostrar la tabla, comprobar usuario
// y contraseña de quien quiera acceder a ella o
// se lo redireccionará a una página diferente.

// Primera etapa:
// 1. Generar una ventana de usuario donde
// se pregunte el rol. El rol debe ser admin
// o recursos.
// 2. Si el rol es correcto, se preguntará la clave,
// esta deberá ser 1234. 
// 3. Luego de que los pasos anteriores se
// cumplan, se preguntará el nombre de
// usuario.
// 4. Se imprimirá el nombre de usuario dentro de
// un contenedor con innerHTML(), por ejemplo,
// en un h1.
// 5. En todos los casos donde el rol o contraseña
// son incorrectos, se redirigirá al usuario a una
// página como la siguiente.

// Segunda etapa:
// Si los datos son válidos, aparte de imprimir el
// nombre de usuario en pantalla se redireccionará
// a la siguiente página, el resultado final será:
// ************************************************
// Hola, User, bienvenido a nuestra aplicación.

//              Nombre Apellido Edad
//               Juan   Pablo    40
//               Ana    García   25
//               María  Zarate   34
// ************************************************



let enunciado = document.getElementById('enunciado');
let rol = prompt('Cuál es su rol');
if (rol === 'admin' || rol === 'recusos'){
    let clave = prompt('Cuál es su clave');
    if(clave === '1234'){
        
        window.location.href = 'datos_empleados.html'
    }
    else window.location.href = 'error.html';
}else window.location.href = 'error.html';