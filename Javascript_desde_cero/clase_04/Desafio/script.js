// Ejercicio 1

// Mejorar la usabilidad de los ejercicios del
// desafío del módulo 3.
// Para ello, diseñar una función que reciba un flujo
// de caja como dato de entrada y retorne -1 si hay
// pérdidas, 1 si hay ganancias, 0 si los ingresos son
// iguales a las ganancias.

// Mejorar la usabilidad del código que hiciste en
// el segundo desafío del módulo 3.
// Para ello, crear una función que reciba el array
// de inversiones y retorne un array agregando a
// cada ítem el campo “interés” con la fórmula
// correspondiente.

let tabla_flujo = document.getElementById('tabla_flujo');
let tabla_credito = document.getElementById('tabla_credito');
let flujo_caja = [
    {'periodo': 'Enero', 'Ingreso': 1500, 'Egreso': 1500},
    {'periodo': 'Febrero', 'Ingreso': 250, 'Egreso': 2500},
    {'periodo': 'Marzo', 'Ingreso': 84683, 'Egreso': 1155},
    {'periodo': 'Abril', 'Ingreso': 135353, 'Egreso': 1533},
    {'periodo': 'Mayo', 'Ingreso': 1535, 'Egreso': 5434},
    {'periodo': 'Junio', 'Ingreso': 4343354, 'Egreso': 5434543},
    {'periodo': 'Julio', 'Ingreso': 435453, 'Egreso': 4543},
    {'periodo': 'Agosto', 'Ingreso': 78351, 'Egreso': 7816},
    {'periodo': 'Septiembre', 'Ingreso': 1878, 'Egreso': 95634},
    {'periodo': 'Octubre', 'Ingreso': 48483, 'Egreso': 9433},
    {'periodo': 'Noviembre', 'Ingreso': 35483, 'Egreso': 53133},
    {'periodo': 'Diciembre', 'Ingreso': 3843, 'Egreso': 348133}
];
var situacionCaja = function(objetoCaja){
    if((objetoCaja.Ingreso > objetoCaja.Egreso)){
        return -1;
    }
    else if((objetoCaja.Ingreso < objetoCaja.Egreso)) {
        return 1;
    }
    return 0;
}
for (let i = 0; i < flujo_caja.length; i++) {
    if(situacionCaja(flujo_caja[i]) === -1){
        tabla_flujo.innerHTML += '<tr><td>' + flujo_caja[i].periodo + '</td><td>' + flujo_caja[i].Ingreso + '</td><td>' + flujo_caja[i].Egreso+ '</td><td>PERDIDA</td></tr>'
    } else if (situacionCaja(flujo_caja[i]) === 1){
        tabla_flujo .innerHTML += ('<tr><td>' + flujo_caja[i].periodo + '</td><td>' + flujo_caja[i].Ingreso + '</td><td>' + flujo_caja[i].Egreso+ '</td><td>GANANCIA</td></tr>')
    }   
    else  {
        tabla_flujo .innerHTML += ('<tr><td>' + flujo_caja[i].periodo + '</td><td>' + flujo_caja[i].Ingreso + '</td><td>' + flujo_caja[i].Egreso+ '</td><td>IGUALES</td></tr>')
       
    }
}

// ***********************************************************************************

let inversiones = [
    {'nombre': 'Plan 001', 'capital': 150000, 'plazo': 30, 'tasa': 15},
    {'nombre': 'Plan 002', 'capital': 300000, 'plazo': 180, 'tasa': 10},
    {'nombre': 'Plan 003', 'capital': 485000, 'plazo': 60, 'tasa': 23}
]
console.log(inversiones);

agregarItemIntereses = function(array){
    let interes_generado;
    let nuevoArray = array;
    for (let i = 0; i < nuevoArray.length; i++) {
        interes_generado = ((nuevoArray[i].capital * nuevoArray[i].plazo * nuevoArray[i].tasa) / 100);
        nuevoArray[i].interes = interes_generado;      
}
    return nuevoArray;
}
agregarItemIntereses(inversiones);
for (let i = 0; i < inversiones.length; i++) {
    tabla_credito.innerHTML += '<tr><td>' + inversiones[i].nombre + '</td><td>' + inversiones[i].capital + '</td><td>' + inversiones[i].plazo + ' días</td><td>' + inversiones[i].tasa + '%</td><td>' + inversiones[i].interes + '</td></tr>';
}
