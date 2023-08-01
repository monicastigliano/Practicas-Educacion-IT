// Ejercicio 1

// Contexto:
// Para analizar la confiabilidad de una PyME,
// ArgenFin necesita que, al momento de realizar
// una solicitud de crédito, la empresa en cuestión
// muestre el flujo de caja del último año. El flujo de
// caja es la descripción de cómo varía el dinero a lo
// largo del tiempo.
// Un ejemplo puede ser el de abajo,
// correspondiente a una empresa que gana más
// dinero cada mes por ventas.
// Si hay más ingresos que egresos, significa que se
// gana dinero. Si hay más egresos que ingresos,
// significa que se pierde dinero.
// Consigna:
// Diseñar una aplicación JavaScript que,
// recibiendo el flujo de caja del último año de la
// empresa, muestre si dicho flujo genera o no
// pérdidas.
// El flujo de caja puede estar cargado en el código
// para motivos de prueba. A modo de prueba, te
// proponemos el siguiente flujo de caja:

// ******************************************************
// Periodo Ingreso Egreso
// Enero 1500 1500
// Febrero 2500 2500
// Marzo 84683 1155
// Abril 135353 1533
// Mayo 1535 5434
// Junio 4343354 5434543
// Julio 435453 4543
// Agosto 78351 7816
// Septiembre 1878 95634
// Octubre 48483 9433
// Noviembre 35483 53133
// Diciembre 3843 348133
//********************************************************


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
for (let i = 0; i < flujo_caja.length; i++) {
    if((flujo_caja[i].Ingreso > flujo_caja[i].Egreso)){
        tabla_flujo.innerHTML += '<tr><td>' + flujo_caja[i].periodo + '</td><td>' + flujo_caja[i].Ingreso + '</td><td>' + flujo_caja[i].Egreso+ '</td><td>PERDIDA</td></tr>'
    } else {
        tabla_flujo .innerHTML += ('<tr><td>' + flujo_caja[i].periodo + '</td><td>' + flujo_caja[i].Ingreso + '</td><td>' + flujo_caja[i].Egreso+ '</td><td>GANANCIA</td></tr>')
    }    
}

// Ejercicio 2

// Contexto
// Así como ArgenFin necesita analizar la empresa,
// también tiene la siguiente oferta de créditos:
// ************************************************
// Nombre Capital Plazo Tasa
// Plan 001 150000 30 días 15%
// Plan 002 300000 180 días 10%
// Plan 003 485000 60 días 23%
// ************************************************
// Para poder conocer mejor su oferta, podemos
// calcular el interés generado mediante la
// fórmula:

//Interés = (Capital * Plazo * Tasa)
//          ________________________
//                      100
// Consigna
// Diseñar un programa JavaScript que recorra
// todas esas alternativas de crédito y genere un
// array con la información de dichas alternativas
// sumando el dato calculado del interés

let oferta_credito = [
    {'nombre': 'Plan 001', 'capital': 150000, 'plazo': 30, 'tasa': 15},
    {'nombre': 'Plan 002', 'capital': 300000, 'plazo': 180, 'tasa': 10},
    {'nombre': 'Plan 003', 'capital': 485000, 'plazo': 60, 'tasa': 23}
]
let interes_generado;

for (let i = 0; i < oferta_credito.length; i++) {
    interes_generado = ((oferta_credito[i].capital * oferta_credito[i].plazo * oferta_credito[i].tasa) / 100);
    oferta_credito[i].interes = interes_generado;
    tabla_credito.innerHTML += '<tr><td>' + oferta_credito[i].nombre + '</td><td>' + oferta_credito[i].capital + '</td><td>' + oferta_credito[i].plazo + ' días</td><td>' + oferta_credito[i].tasa + '%</td><td>' + oferta_credito[i].interes + '</td></tr>';
}