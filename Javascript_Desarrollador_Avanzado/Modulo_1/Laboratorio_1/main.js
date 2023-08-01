// EJERCICIOS CLASE 1 : Javascript
// Ejercicio 1
// Crear una lista desordenada con 10 elementos dentro usando un bucle for. Tener en cuenta que
// solo se le puede hacer un único appendChild al ul creado, asi minimizamos el tiempo de
// modificaciones en el DOM.

const ul = document.createElement('ul');
const fragmento = document.createDocumentFragment();
const body = document.getElementsByTagName('body')[0];
for (let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    li.innerText = 'elemento ' + (i+1);
    fragmento.appendChild(li);
}
body.appendChild(fragmento);

// Ejercicio 2
// Hacer que el <article> con id "movil" solamente se vea si la página se carga a menos de 500px.

const artMovil = document.getElementById('movil');


if( innerWidth > 500)
artMovil.style.display = 'none';

// Ejercicio 3
// Realizar la misma operación que en el punto uno, pero ahora para el <ul> que ya se encuentra
// en el <body>. Recordar que no se puede hacer múltiples appendChild a un nodo.

const ulEstatico = document.getElementById('estatico')
const fragmento_dos = document.createDocumentFragment();

for (let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    li.innerText = 'elemento Movil ' + (i+1);
    fragmento_dos.appendChild(li);
}
ulEstatico.appendChild(fragmento_dos);

// Ejercicio 4
// Intercambiar las URLs de los links de la barra de navegación. El que dice Google! tiene que
// redirigir a educacionit.com y viceversa.

const google = document.getElementById('google');
const educacionIt = document.getElementById('educacionIt');

google.href = 'http://educacionit.com';
educacionIt.href = 'http://google.com';

// Ejercicio 5
// Cambiarle el color del fondo al <header> por alguna tonalidad de azul oscuro y al <h1> por
// alguna tonalidad de blanco para que contraste.

const header = document.getElementById('header');
const h1 = document.getElementsByTagName('h1')[0];
header.style.background = '#6f6feb';
header.style.height = '80px';
h1.style.color = 'white';

// BONUS : Javascript
// Ejercicio 1
// Realizar un efecto marquesina en un nodo <p> que diga "Mi primer programa en JS" que
// muestre de a una letra a la vez cada medio segundo por letra


const p = document.createElement('p')
let texto = 'Mi primer programa en JS';

p.innerText = '';
header.appendChild(p);

let contador = 0;

let intervalo = setInterval(()=>{
    if(contador < texto.length){
        p.innerText += texto[contador];
        contador++;
    }else{
        p.innerText = '';
        contador = 0;
    }
}, 300);

// Ejercicio 2
// Crear un <div> de 200px de ancho por 200px de alto con el color de fondo a eleccion. El
// elemento tiene que poder ir hasta el final de la pantalla sin pasarse de más.

// let div = document.createElement('div');
// div.style.position = 'relative';
// div.style.width = '200px';
// div.style.height = '200px';
// div.style.background = 'pink';
// body.appendChild(div);
// let mov = 0;
// let intervaloCubo = setInterval(()=>{
//     if((mov+200 ) === innerWidth){
//         clearInterval(intervaloCubo)
//     }else{
//         div.style.left = mov +'px';
//         mov++;
//     }
// }, 0.5);


// Ejercicio 3
// Al <div> del punto anterior transformarlo en círculo cuando se aproxime al centro de la pantalla y
// que vuelva a cuadrado cuando se aproxime a los extremos.

let div = document.createElement('div');
div.style.position = 'relative';
div.style.width = '200px';
div.style.height = '200px';
div.style.background = 'pink';
body.appendChild(div);
let mov = 0;
let radius = 0;
let final_radius = 50;
let intervaloCubo = setInterval(()=>{
    if((mov+200 ) === innerWidth){
        clearInterval(intervaloCubo)
    }
    div.style.left = mov +'px';
    div.style.borderRadius = radius + '%';
    let mitad_pantalla = innerWidth/2;
    let mitad_izq = mitad_pantalla / 2;
    let mitad_der = mitad_pantalla + (mitad_pantalla / 2);

    if (mov >= mitad_izq && mov <= mitad_pantalla){
        let porcentaje = (mov * 100) / mitad_izq;
        let porcentaje_radius = porcentaje * final_radius;
        
        radius = porcentaje_radius;
    }

    if (mov > mitad_pantalla && mov <= mitad_der){
        let porcentaje = (mov * 100) / mitad_der;
        let porcentaje_radius = 100 - porcentaje;
        radius = porcentaje_radius
    }
    mov++;
}, 0.5);