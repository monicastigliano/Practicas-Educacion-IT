// Ejercicio 1
const CampoRequerido = function(selector)
{
    let isValid = false;

    const elemento = document.querySelector(selector);

    // 1. Registrar los eventos de validación
    elemento.addEventListener('blur', function(){
        isValid = elemento.value.length !== 0;
    });

    // 2. Proveer el estado actual de dicho campo
    function getState() { return isValid; }

    elemento.isValid = getState;

    return elemento;
}

// Ejercicio 2

const usuario = CampoRequerido('#usuario');
const clave = CampoRequerido('#clave');

document.querySelector('#frmLogin').addEventListener('submit', function(e){
    e.preventDefault();

    if(
        usuario.isValid() &&
        clave.isValid()
    )
        document.querySelector('#frmLogin').submit();
});