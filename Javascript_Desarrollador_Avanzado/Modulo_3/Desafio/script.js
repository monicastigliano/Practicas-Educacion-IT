//Ejercicio 1

/**
 * Ya es tiempo de pasar a hacer una interfaz de usuario. Un gran comienzo es diseñar
validaciones para un formulario. Pero, recordemos mantener este principio de
separar la lógica de la presentación lo más posible.
En esta primera parte, vamos a diseñar una función llamada CampoRequerido. Esta
función debe recibir un elemento del DOM y retornar el mismo elemento. Solo debe
agregarle un listener al ‘blur’ para que, cuando éste se dispare, modifique la
propiedad isValid de ese elemento

 */
const CampoRequerido = function(selector){
    let isValid = false
    const elemento = document.querySelector(selector)
    
    elemento.addEventListener('blur', ()=>{
        isValid = elemento.value.length !== 0;
    })
    function getState(){
        return isValid
    }
    elemento.isValid = getState()
    return elemento
}


//Ejercicio 2

/**
 * Una vez tenemos esa función, queda usarla con los diferentes campos que queramos. Para
obtener el estado de validación, podemos acceder a su propiedad isValid como si fuese una
propiedad común (recuerda que los objetos de JS son dinámicos, así que podemos insertar
propiedades dinámicamente).

 */

const usuario = CampoRequerido('#usuario')
const clave = CampoRequerido('#clave')
 
const formulario = document.getElementById('frmLogin')

formulario.addEventListener('submit', () => {
    e.preventDefault()

    if(usuario.isValid && clave.isValid){ 
        formulario.submit()
    }
})

