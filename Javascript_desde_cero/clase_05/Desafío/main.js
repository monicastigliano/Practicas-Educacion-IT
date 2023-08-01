// Ejercicio 1

// Contexto:
// Nuestros programas vienen resultando muy útiles
// para los testers de ArgenFin.
// Sin embargo, su diseño e interfaz resultan
// incomprensibles para el resto de los empleados.
// Nos cuentan un caso concreto: cuando una
// empresa se contacta, es atendida por recepción
// quien solicita los datos para calcular el Punto de
// equilibrio. Recepción debería contar con una
// interfaz que le permitiera realizar ese cálculo.

// Consigna:
// Hacer una interfaz sencilla en HTML para el
// cálculo del Punto de equilibrio (Desafío 1 del
// módulo 1).
// Puedes usar jQuery, Handlebars o JavaScript
// puro para comunicar HTML con JavaScript.


const ingresoTotal = document.getElementById('ingresoTotal');

let plantilla = Handlebars.compile(`<ul>
    <li>Gastos Necesarios: $ {{cincuenta}}</li>
    <li>Gastos opcionales: $ {{treinta}}</li>
    <li>Ahorro e inversión: $ {{veinte}}</li>
</ul>`);

$('#calcular').click(function(){
    if(ingresoTotal.value === ''){ 
        alert('debe Ingresar un monto a calcular')
    }
    else
    $('#puntoEquilibrio').html(plantilla({
        cincuenta: ((parseFloat(ingresoTotal.value) * 50)/ 100),
        treinta: ((parseFloat(ingresoTotal.value) * 30)/ 100),
        veinte: ((parseFloat(ingresoTotal.value) * 20)/ 100)
    }))
});





// Ejercicio 2

// Contexto:
// ¡Les ha encantado tu trabajo y quieren seguir
// avanzando!
// 
// Consigna:
// Diseñar una interfaz en HTML sencilla para el
// cálculo de un presupuesto.
// La interfaz debe tener las siguientes
// características:
// ● Debe pedir el monto de los ingresos.
// ● Debe tener un botón para iniciar el cálculo.
// ● Debe mostrar el monto total destinado a
// cada categoría.

const montoIngreso = document.getElementById('montoIngreso');

let plantillaDos = Handlebars.compile(`<ul>
    <li>Categoria Uno: $ {{catUno}}</li>
    <li>Categoria Dos: $ {{catDos}}</li>
    <li>Categoria Tres: $ {{catTres}}</li>
</ul>`);

$('#calcularDos').click(function(){
    if(montoIngreso.value === ''){ 
        alert('debe Ingresar un monto a calcular')
    }
    else
    $('#presupuesto').html(plantillaDos({
        catUno: ((parseFloat(montoIngreso.value) * 40)/ 100),
        catDos: ((parseFloat(montoIngreso.value) * 35)/ 100),
        catTres: ((parseFloat(montoIngreso.value) * 25)/ 100)
    }))
});

// Consigna extra nivel medio:
// ¿Cómo puedes modificar esta interfaz para que
// sea el usuario quien ponga los porcentajes
// destinados a cada categoría?

const ingreso = document.getElementById('ingreso');
const porcentajeUno = document.getElementById('porcentajeUno');
const porcentajeDos = document.getElementById('porcentajeDos');
const porcentajeTres = document.getElementById('porcentajeTres');

let plantillaTres = Handlebars.compile(`<ul>
    <li>Categoria Uno: $ {{catUno}}</li>
    <li>Categoria Dos: $ {{catDos}}</li>
    <li>Categoria Tres: $ {{catTres}}</li>
</ul>`);

$('#calcularTres').click(function(){
    if(ingreso.value === ''){ 
        alert('debe Ingresar un monto a calcular')
    }
    else
    $('#porcentajes').html(plantillaTres({
        catUno: ((parseFloat(ingreso.value) * parseInt(porcentajeUno.value))/ 100),
        catDos: ((parseFloat(ingreso.value) * parseInt(porcentajeDos.value))/ 100),
        catTres: ((parseFloat(ingreso.value) * parseInt(porcentajeTres.value))/ 100)
    }))
});


// Consigna extra nivel avanzado:
// ¿Cómo puedes modificar esta interfaz para
// que sea el usuario quien vaya ingresando las
// categorías que quiere, con el nombre de dicha
// categoría y el porcentaje que decide destinar?

let inputCat = document.getElementById('categoria');
let inputPorc = document.getElementById('porcentaje');
let ingresos = document.getElementById('ingresos');
let listaCategorias = [];

let plantillaCategorias = Handlebars.compile(`<ul>
    <li>{{cat}} {{porc}}</li> 
</ul>`);
let plantillaCuatro = Handlebars.compile(`<ul>
    {{#each listaCategorias}}
        <li>{{this.c}} <span>: $</span> {{this.p}}</li>
    {{/each}}
</ul>`);

$('#btnAgregar').click(function(e){
    e.preventDefault();
    $('#categorias').append(plantillaCategorias(
        {
            cat: inputCat.value,
            porc: parseFloat(inputPorc.value)
        }
    ));
    let cateNueva;
    if(ingresos.value === '')
        cateNueva = {'c': inputCat.value, 'p': 0}
    else  
        cateNueva = {'c': inputCat.value, 'p': ((parseFloat(ingresos.value) * parseInt(inputPorc.value))/ 100)}
    listaCategorias.push(cateNueva);
    inputCat.value = '';
    inputPorc.value = '';
    
})

$('#calcularCuatro').click(function(e){
    e.preventDefault();
    if(ingresos.value === ''){ 
        alert('debe Ingresar un monto a cálcular')}
    else{
        $('#resultado').html(plantillaCuatro({listaCategorias}));
    }
})