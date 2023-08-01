const textos = {
    "link1" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    "link2" : "Vitae voluptates, animi illum cum repellendus adipisci nulla, ipsam natus rem pariatur excepturi dolores consequatur nisi eos",
    "link3" : "Maiores maxime placeat nam necessitatibus."
}
// alert("Se ha detectado un virus. Dirigase a la consola de desarrollo para investigar el problema!");
let btn_error = document.querySelector("#error")
btn_error.addEventListener("click",function(e){
    e.stopPropagation();
},true)

// document.addEventListener("click",function(e){
//     throw new Error("Se ha detectado un nuevo virus!. El mismo puede desactivarse si el evento click del boton#error no se propaga.")
// },true)

//1) Asignarle un evento de click al boton hamburguesa para que pueda ser capaz de abrir y cerrar el nav #drawer

const btn_menu = document.getElementById('btn_menu');
const menu = document.getElementById('drawer');
function cerrarDrawer(e){
    e.preventDefault();
    if(menu.style.left ==='32px')menu.style.left = '-300px';
    else menu.style.left = '32px';
}
btn_menu.addEventListener('click', cerrarDrawer)

//2) Asignarle un evento de click a los links del nav #drawer para que sean capaces de buscar dentro del objeto "textos" el texto correspondiente a su seccion y poder mostrarla en el <article>



const vinculo = document.querySelectorAll('a');
console.log(vinculo)
vinculo.forEach(function(element){
    const info = document.getElementById('info');
    element.addEventListener('click', function(e){
        e.stopPropagation()
        e.preventDefault();
        info.innerText = textos[e.target.innerHTML];
        cerrarDrawer(e)
    })
});

//3)El objeto global window tiene un evento llamado resize. Este evento se dispara cada vez que el navegador cambia de tamaño, es decir, cuando se minimiza o maximiza. Asignarle un evento que sea capaz de cambiarle el color de fondo al body por rojo si estamos a mas de 600px y azul si estamos a menos.

window.addEventListener('resize', function(){
    if (window.outerWidth > 600) 
        document.querySelector('body').style.background = 'red'
    else document.querySelector('body').style.background = 'blue';
})


//Bonus
//4)Refactorizar el codigo del punto 2 para que los links tambien puedan cerrar el drawer
//===> Listo

//5)
// Utilizar la plantilla del archivo formulario.html y pegarlo entre el <article> y el <script>. 
// Asignarle un evento al formulario para que sea capaz de capturar los valores de sus inputs de manera dinámica //SIN usar querySelectors para construir un listado de comentarios de usuarios dentro del <ul>. Cada item deberá tener el nombre del usuario, titulo y cuerpo del comentario. 
let nom = document.getElementById('nombre');
let tit = document.getElementById('titulo');
let mens = document.getElementById('mensaje');
let listado = document.getElementById('lista') 
nom.addEventListener('focus', function(){
    nom.classList = 'subir'
})
tit.addEventListener('focus', function(){
    tit.classList = 'subir'
})
let arrayMensaje = [];
class ObjetoMensaje {
    constructor() {
        this.nombre = this.nombre;
        this.titulo = this.titulo;
        this.mensaje = this.mensaje;
    }
}
function agregarLista(array){
    listado.innerHTML = ''
    var fragmento = document.createDocumentFragment();
    array.forEach(element => {
        let li = document.createElement('li')
        li.textContent = 'Nombre: ' + element.nombre + '. Título: ' + element.titulo + '. Mensaje: ' + element.mensaje
        fragmento.appendChild(li)
    });

    listado.appendChild(fragmento)
}   
const btn_comentar = document.getElementById('btn-comentar');

btn_comentar.addEventListener('click', function(e){
    e.preventDefault();
    let nuevoMensaje = new ObjetoMensaje();
    nuevoMensaje.nombre = nom.value;
    nuevoMensaje.titulo = tit.value;
    nuevoMensaje.mensaje = mens.value;
    arrayMensaje.push(nuevoMensaje);
    agregarLista(arrayMensaje);
    let mensajeFinal = 'Nombre: ' + nom.value + ' Titulo: ' + tit.value + ', Mensaje: ' + mens.value;
    console.log(mensajeFinal)
    nom.value = ''
    tit.value = ''
    mens.value = ''
})