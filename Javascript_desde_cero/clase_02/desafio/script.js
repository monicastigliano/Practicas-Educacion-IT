// Ejercicio 1

// Contexto
// Cuánto más grande es un proyecto, más necesario
// se hace el desarrollo componente por
// componente.
// En este módulo, vamos a desarrollar la lógica de
// un login.
// Consigna
// Como primer ejercicio, te proponemos pedir la
// edad del usuario y validar si es mayor a 18
// años. En caso correcto, deberás mostrar un
// mensaje de bienvenida

let edad = prompt('Ingrese su edad');
if(edad >= 18){
    alert('Bienvenido!!!')
} else alert('Lo siento, usted es menor de edad')

// Ejercicio 2

// Contexto
// Ahora vamos a hacer un inicio de sesión, el cual
// tiene tres pasos generales:
// 1. Solicitar las credenciales del usuario: el login
// empieza cuando solicitamos al usuario que se
// identifique. Estas credenciales deben validar
// que el usuario es quien dice ser, por tal motivo
// suelen incluir datos que deba conocer solo el
// usuario deseado (como una contraseña).
// 2. Validación de las credenciales: en este paso
// deberíamos verificar si esas credenciales son
// correctas o válidas.
// 3. Tomar acción respecto a la validez o
// invalidez de las credenciales: puede ser un
// mensaje de error o de bienvenida.

// Consigna
// Para este caso te proponemos solicitar un
// usuario y clave.
// El usuario estará validado si es “admin” y su
// clave es “1234”

let usuario = prompt('Ingrese nombre de usuario');
let contraseña = prompt('Ingrese su contraseña');
if(usuario === 'admin' && contraseña === '1234'){
    alert('Bienvenido/a ' + usuario)
} else alert('Error, datos incorrectos');