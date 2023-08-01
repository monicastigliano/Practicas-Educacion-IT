const input = document.getElementById('input_uno')
const form = document.getElementById('form')


 form.addEventListener('submit', (e)=>{
    e.preventDefault()

   let valor = input_uno.value
   //trim()
   let regexp = /^\w{5,10}$/
   if(regexp.test(valor)){
    console.log('Valido!');
   } else console.log('No Valido!');
  })


//trim()
//includes() / indexOf()
//encodeURIComponent() / XSS

// form.addEventListener('submit', (e)=>{
//     e.preventDefault()

//     let valor = input_uno.value
//     let valor_con_trim = valor.trim()
//     let longitud = valor_con_trim.length

//     console.log(encodeURIComponent(valor_con_trim));

//     console.log(valor_con_trim.includes(' '));
//     if(longitud > 3){

//         console.log(longitud);
//         // input_uno.setCustomValidity('')
//     } else {
//         input_uno.setCustomValidity('Este campo debe tener mas de 3 caracteres')
//         console.log(longitud);
//     }
// })

//RegExp / Expresiones Regulares
//Secuencia de caracteres que conforman un patron de busqueda de un String
//Son universales, es decir que sirven para cualquier lenguaje de programación entre otras implementaciones
//Son formos de validación complejas de escribir y leer

// let regexp = /\w/

/**
 *  \w : WORD : alfabetico y numerico
 *  \W : negación de \w
 *  \d : DIGITOS
 *  \D : negación de \d
 *  \s : espacios, saltos de lineaa, etc
 *  \S : negación de \s
*/

// let regexp = /(abc){2}/

/**
 *  CARACTERES ESPECIALES DE CANTIDAD
 * 
 *  {N} solo hace refencia al caracter adyacente izquierdo
 *  {N,M} : N --> minimo y M --> Maximo
 *  () : agrupamiento
 *  * : entre 0 o muchas instancias del caracter == {0, }
 *  + : entre 1 o muchas instancias del caracter == {1, }
 */


// let regexp = /a^/

/**
 * CARACTERES ESPECIALES DE POSICION    
 * 
 * ^ : el comienzo de todo un string(todo el parrafo) ---> ejemplo: \^a\
 * $ : el final de todo un string(todo el parrafo) ---> ejemplo: \a$\
 * \b : boundry - el limite de una palbra ---> ejemplo: \a\b\   o así  \\ba\
 */