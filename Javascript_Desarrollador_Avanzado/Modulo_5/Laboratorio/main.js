
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


*/

let main = document.querySelector('main')

function render(selector, data){
    document.querySelector(selector).innerHTML = data
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
        location.hash = id
    })
})

let titulo = document.getElementById('home')

titulo.addEventListener('click', ()=>{
    let xhr = ajax('home.html')
    location.hash = 'home'
    xhr.addEventListener('load', ()=>{
        if (xhr.status === 200){
            render('main', xhr.response)
            // history.pushState(null,'', 'home')
        }
})
})

let paginaInicial = ajax('home.html')

paginaInicial.addEventListener('load', ()=>{
    if(paginaInicial.status === 200){
        render('main', paginaInicial.response)
        location.hash = 'home'
    }
})

window.addEventListener('hashchange', ()=>{
    //location.hash = '#perfil'
    //location.hash.split('#') = [''. 'perfil']
    //location.hash.split('#')[1] = 'perfil'
    let archivo = location.hash.split('#')[1] + '.html'//'perfil.html'
    let xhr = ajax(archivo)
        xhr.addEventListener('load', ()=>{
            if (xhr.status === 200){
                render('main', xhr.response)
                // history.pushState(null,'', id)
            }
        })
})