let menu = document.querySelector(".material-icons")
let drawer = document.querySelector("#drawer")
menu.addEventListener("click",function(e){
    if (drawer.style.left) {
        drawer.style.left = ''
    }else{
        drawer.style.left = '0px'
    }
})


/**
 * Continuando con la página dinámica que habíamos construido en la clase anterior vamos
a intentar controlar el historial del cliente para poder simular una navegación completa

Ejercicio 1:

Modificar el callback de los clicks de cada link para que además se cree un nuevo punto en el
historial del usuario usando el texto de cada link como nueva url

Ejercicio 2

Asignarle a window un evento de popstate para que dentro de su callback podamos volver a
solicitar el contenido de la url reflejada. Podemos usar el string ubicado en
window.location.pathname que nos da nuestra URL generada en el paso anterior

Ejercicio 3

Cada vez que se modifique el historial, se debe guardar en su estado la respuesta del pedido
dentro de un objeto bajo una propiedad llamada template y la url que le corresponda bajo una
propiedad llamada url. Podemos bajar el pushState al evento load para tener acceso a la
respuesta de la solicitud (*Podemos tener comportamiento errático) . La función ajax va a recibir
entonces un cuarto parámetro booleano para saber si tiene que modificar el historial o no.

Ejercicio 4

En caso que nos quede un comportamiento errático dado que estamos ejecutando una función
usando la url antes de que cambie y que de hecho si observamos el objeto state del historial
tampoco corresponde al estado anterior correcto podemos dejar de ejecutar ajax y simplemente
hacer render del contenido de nuestro template guardado en el historial

Ejercicio 5

Refactorizar la función callback de ajax para que además pueda ejecutar una función llamada
portfolioLoad. La misma deberá ser capaz de reconocer si portfolio es la página que se cargo y
si lo fue, hará un pedido por ajax a la API de imagenes https://dog.ceo/api/breeds/image/random
la cual nos devolverá un JSON con la url de una imagen de perros! Estas imágenes vamos a
usarlas como elementos nuevos dentro de cada <article> que se encuentre en la sección de
portfolio
*/

let main = document.querySelector('main')




function render(selector, data){
    document.querySelector(selector).innerHTML = data
    if(data.includes('Portfolio')){
        portfolioLoad()
    }
}

function ajax(url, metodo){
    let xhr = new XMLHttpRequest()
    let http_metodo = metodo || 'get'
    xhr.open(http_metodo, url)
    xhr.send()
    return xhr
}

let imagen = document.getElementById('loader')

imagen.addEventListener('load', ()=>{
     let hom = ajax('home.html','get')
     if(hom.status === 200){
        render('main', 'home.html')
     }
})

let link = document.querySelectorAll('a')

link.forEach((elemento)=>{
    elemento.addEventListener('click', (e)=>{
        e.preventDefault()
        let id = elemento.id
        let archivo = id + '.html'
        let xhr = ajax(archivo)
        xhr.addEventListener('load', ()=>{
            if (xhr.status === 200){
                render('main', xhr.response)
                history.pushState({template : xhr.respose}, '', id)
                                   //guarda el recurso en el cache
            }
        })
    })
})

let titulo = document.getElementById('home')

titulo.addEventListener('click', (e)=>{
    let xhr = ajax('home.html')
    if(e.template){
        render('main', e.template)
    }else{
            xhr.addEventListener('load', ()=>{
            if (xhr.status === 200){
                render('main', xhr.response) 
                history.pushState({template : xhr.respose}, '', 'home')
            }
    })
    }
})

let paginaInicial = ajax('home.html')

paginaInicial.addEventListener('load', ()=>{
    if(paginaInicial.status === 200){
        render('main', paginaInicial.response)
    }
})

window.addEventListener('popstate', (e)=>{
    if(e.template){ //para buscar el recurso en el cache
        render('main', e.template)
    }else{
        let archivo = location.pathname.split('/')[3] + '.html' //Ejemplo => 'usuario.html'
        let xhr = ajax(archivo)
        xhr.addEventListener('load', ()=>{
            if (xhr.status === 200){
                render('main', xhr.response)
            }
        })
    }
})

/**
 * BONUS : Javascript
 * 
Ejercicio 1:
Asignarles un evento de click a cada ítem dentro de la sección portfolio para que puedan cargar
su propio contenido por AJAX. La sección de "Listado de usuarios" debe pedir un archivo
llamado listado.html y la sección "Traduccion de palabras" debe cargar un archivo llamado
traduccion.html

Ejercicio 2:
Refactorizar el callback del punto anterior para que también se le pueda asignar un click
dinámico al <button> del template de listado.html . El callback de su click debera ir a pedir por
GET la siguiente URL : https://jsonplaceholder.typicode.com/users y mostrar un <li> con el
nombre de cada usuario dentro del <ul> del mismo template.
 */

function portfolioLoad(){
    let articulos  = document.querySelectorAll('article')
    if(articulos.length)
        articulos.forEach(articulo =>{
            let xhr = ajax('https://dog.ceo/api/breeds/image/random')
            xhr.addEventListener('load', ()=>{
                if(xhr.status === 200){
                    let imagen = document.createElement('img')
                    imagen.src = JSON.parse(xhr.response).message
                    articulo.children[0].appendChild(imagen)
                }
            })
        })      
        let lista_usuarios = document.getElementById('list_usuarios')

        lista_usuarios.addEventListener('click', (e)=>{
            e.preventDefault()
            let xhr = ajax('listado-de-usuarios.html')
            xhr.addEventListener('load', ()=>{
                if(xhr.status === 200){
                    if(e.template){
                        render('main', e.template)
                    }else{
                        render('main', xhr.response) 
                        history.pushState({template : xhr.response}, '', 'listado-de-usuarios')
                        }
                        
                }
                let btnUsuarios = document.getElementById('botonUsuarios')

                btnUsuarios.addEventListener('click', (e) => {
                    e.preventDefault()
                    let xhr = ajax('https://jsonplaceholder.typicode.com/users')
                    xhr.addEventListener('load', () => {
                        if(xhr.status === 200){
                            let ul = document.createElement('ul')
                            let usu = JSON.parse(xhr.response)
                            console.log(usu);
                            let lista = ''
                            usu.forEach(usuario => {
                                lista += `<li> ${usuario.name}</li>`
                            })
                            ul.innerHTML = lista
                            main.appendChild(ul)
                        }
                    })
                })
            })
        })

        let trad_palabras = document.getElementById('trad_palabras')

        trad_palabras.addEventListener('click', (e)=>{
            e.preventDefault()
            let xhr = ajax('traduccion-de-palabras.html')
            xhr.addEventListener('load', ()=>{
                if(xhr.status === 200){
                    if(e.template){
                        render('main', e.template)
                    }else{
                        render('main', xhr.response) 
                        history.pushState({template : xhr.response}, '', 'traduccion-de-palabras')
                        }
                        
                }
            })
        })
}


