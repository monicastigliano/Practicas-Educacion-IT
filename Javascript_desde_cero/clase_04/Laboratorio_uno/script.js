// Ejercicio 1
// 1. Se generarán 4 botones y se realizará una
// sóla función. Cada botón pasará a un color
// distinto. La referencia es la de arriba a la             Blue Red Green Pink
// derecha:
// 2. Al hacer clic en cada botón, generamos el alerta
// ejemplo -> (El color es Blue)
// 3. Generamos una caja, y dentro trabajaremos
// con innerHTML para poder sumar el texto.
// 4. Con style modificaremos el color de fondo de
// la caja.
let boton = document.getElementsByTagName('button');
let mensaje = document.getElementById('color');
for (let i = 0; i < boton.length; i++) {
    boton[i].onclick = function() {
        mensaje.innerHTML = 'El color es ' + boton[i].innerHTML;
        mensaje.style.background = boton[i].innerHTML
        //alert('El color es ' + boton[i].innerHTML);
    };
}





