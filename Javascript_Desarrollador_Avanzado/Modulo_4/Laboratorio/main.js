let menu = document.querySelector(".material-icons")
let drawer = document.querySelector("#drawer")
menu.addEventListener("click",function(e){
    if (drawer.style.left) {
        drawer.style.left = ''
    }else{
        drawer.style.left = '0px'
    }
})

//1)Asignarle un evento de load a la imagen del gif para que cuando haya terminado de cargar realicemos entonces un pedido por ajax para ir a buscar los contenidos del archivo home.html

//2)Al finalizar el pedido se deberá mostrar el contenido del resultado dentro del elemento <main>

// let imagen = document.getElementById('loader')


// imagen.addEventListener('load', ()=>{
//     let xhr = new XMLHttpRequest()
//     xhr.open('get', 'home.html')
//     xhr.addEventListener('load', ()=>{
//         if(xhr.status === 200){
//             let plantilla = xhr.response
//             let div = document.createElement('div')
//             div.innerHTML = plantilla
//             document.querySelector('main').innerHTML = plantilla
//         }
//     })
//     xhr.send()
// })

//3)Asignarle un evento de click a cada link del <nav> para que cada uno pueda pedir por ajax los contenidos de los archivos que les corresponden. Para esto recordar que :
    //3.1)Hay que cancelarles el evento default
    //3.2)El callback para pedir los archivos de cada link debe ser el mismo para los tres casos

// let nav = document.querySelectorAll('a')

// nav.forEach((elemento)=>{
//     elemento.addEventListener('click', (e)=>{
//         e.preventDefault()

//         //Callback para pedir los archivos de cada link :D
//         function cb(dato){
//             let xhr = new XMLHttpRequest
//             xhr.open('get', dato)
//             xhr.addEventListener('load', ()=>{
//                 if(xhr.status === 200){
//                     let plantilla = xhr.response
//                     document.querySelector('main').innerHTML = plantilla
//                 }
//             })
//             xhr.send()
//         } 
//         switch (elemento.innerHTML) {
//             case 'perfil':
//                 cb('perfil.html')
//             break;
//             case 'portfolio':
//                 cb('portfolio.html')
//             break;
//             case 'contacto':
//                 cb('contacto.html')
//             break;
                
//             default:
//                 break;
//         }
//     })
// })


//Bonus 
//4)Refactorizar el programa tal que nos quede una funcion llamada ajax que tome como parametros 
    //4.1)String Url : la url para usar en el pedido
    //4.2)String Metodo : el metodo HTTP del pedido

// let imagen = document.getElementById('loader')
// function ajax(metodo, url){
//     let xhr = new XMLHttpRequest()
//     xhr.open(metodo, url)
//     xhr.addEventListener('load', ()=>{
//         if(xhr.status === 200){
//             let plantilla = xhr.response
//             document.querySelector('main').innerHTML = plantilla
//         }
//     })
//     xhr.send()
// }

// imagen.addEventListener('load', ()=>{
//     ajax('get', 'home.html')
// })

// let nav = document.querySelectorAll('a')

// nav.forEach((elemento)=>{
//     elemento.addEventListener('click', (e)=>{
//         e.preventDefault()
//         switch (elemento.innerHTML) {
//             case 'perfil':
//                 ajax('get', 'perfil.html')
//             break;
//             case 'portfolio':
//                 ajax('get', 'portfolio.html')
//             break;
//             case 'contacto':
//                 ajax('get', 'contacto.html')
//             break;
                
//             default:
//                 break;
//         }
//     })
// })


//5)Refactorizar la funcion ajax creada en el punto anterior para que ademas tome como ultimo parametro una funcion Function callback opcional que sera usada en el evento load pasandole la respuesta del objeto XHR por defecto
// function cb(dato){
//     document.querySelector('main').innerHTML = dato
// }

// let imagen = document.getElementById('loader')
// function ajax(metodo, url, cb){
//     let xhr = new XMLHttpRequest()
//     xhr.open(metodo, url)
//     xhr.addEventListener('load', ()=>{
//         if(xhr.status === 200){
//             cb(xhr.response)
//         }
//     })
//     xhr.send()
// }

// imagen.addEventListener('load', ()=>{
//     ajax('get', 'home.html', cb)
// })

// let nav = document.querySelectorAll('a')

// nav.forEach((elemento)=>{
//     elemento.addEventListener('click', (e)=>{
//         e.preventDefault()
//         switch (elemento.innerHTML) {
//             case 'perfil':
//                 ajax('get', 'perfil.html', cb)
//             break;
//             case 'portfolio':
//                 ajax('get', 'portfolio.html', cb)
//             break;
//             case 'contacto':
//                 ajax('get', 'contacto.html', cb)
//             break;
                
//             default:
//                 break;
//         }
//     })
// })

//6)Crear una funcion llamada render que tome como parametros :
    //6.1)String Selector : el selector a donde va a ser renderizada la informacion
    //6.2)String Data : La informacion para mostrar en el html
//La misma debe ser utilizada en nuestra funcion anterior como parametro para mostrar los resultados del ejercicion 3


function render(selector, data){
    document.querySelector(selector).innerHTML = data
}

let imagen = document.getElementById('loader')
function ajax(metodo, url, cb){
    let xhr = new XMLHttpRequest()
    xhr.open(metodo, url)
    xhr.addEventListener('load', ()=>{
        if(xhr.status === 200){
            cb('main', xhr.response)
        }
    })
    xhr.send()
}

imagen.addEventListener('load', ()=>{
     ajax('get', 'home.html', render)
})

let nav = document.querySelectorAll('a')

nav.forEach((elemento)=>{
    elemento.addEventListener('click', (e)=>{
        e.preventDefault()
        switch (elemento.innerHTML) {
            case 'perfil':
                ajax('get', 'perfil.html', render)
            break;
            case 'portfolio':
                ajax('get', 'portfolio.html', render)
            break;
            case 'contacto':
                ajax('get', 'contacto.html', render)
            break;
                
            default:
                break;
        }
    })
})