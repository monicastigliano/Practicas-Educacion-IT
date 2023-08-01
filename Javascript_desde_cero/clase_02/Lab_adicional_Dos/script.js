// Ejercicio 1

// 1. Se generará una ventana de usuario donde se
// preguntará el rol, como en la referencia
// debajo. El rol debe ser admin o recursos.
// 2. Si el rol es correcto, se preguntará la clave;
// ésta deberá ser 1234.
// 3. Luego de que los pasos anteriores se
// cumplan, se preguntará el nombre de
// usuario.
// 4. Se imprimirá el nombre de usuario dentro de
// un contenedor con innerHTML(), por ejemplo
// en un h1.
// 5. En todos los casos donde el rol o contraseña
// son incorrectos, se redirigirá al usuario a una
// página como la siguiente.

let enunciado = document.getElementById('enunciado');
let rol = prompt('Ingrese su rol');
if (rol === 'admin' || rol === 'recusos'){
    let clave = prompt('Ingrese la clave');
    if(clave === '1234'){
        let nombre = prompt('Ingrese es su nombre');
        enunciado.innerHTML = 'Hola ' + nombre + ', bienvenida a nuestra aplicación.';
    }
    else window.location.href = 'error.html';
}else window.location.href = 'error.html';