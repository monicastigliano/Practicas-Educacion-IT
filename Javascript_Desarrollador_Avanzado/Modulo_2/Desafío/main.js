/**
 * Es importante, cuando programamos, intentar separar la lógica de nuestra aplicación
de sus entradas y salidas. Separar la lógica de la presentación permite tener código
altamente testeable y escalable. Ahora en esta segunda parte, te proponemos diseñar
una aplicación de lista de tareas.
Vamos a dividir el código de esta aplicación de lista de tareas en tres partes:
● Una función Tarea que devuelva un nuevo objeto de tareas.
● Un array AlmacenamientoTareas en donde estén todas las tareas actuales.
● Un conjunto de funciones que permitan manipular dicho almacenamiento.

Ejercicio 1:
1. En esta parte nos centraremos en hacer una función Tarea, que reciba:
● El código
● Título
● Descripción
● Fecha de alta
● Deathline
● Observaciones
● Estado
2. Esa función debe devolver un objeto con los mismos campos.
3. En AlmacenamientoTareas, simplemente crear un array con varias Tareas de prueba.
 */

class Tarea {
    constructor() {
        this.codigo = codigo;
        this.titulo = titulo;
        this.descripcion = this.descripcion;
        this.fechaAlta = this.fechaAlta;
        this.deathline = this.deathline;
        this.observaciones = this.observaciones;
        this.estado = this.estado;
    }
}
let almacenamientoTareas = [
    {'codigo': 01, 'titulo': 'La rosa', 'descripcion': 'Novela', 'fechaAlta': '10/02/2020', 'deathline': '10/05/2023', 'observaciones': 'Novela de terror', 'estado': 'en-curso' },
    {'codigo': 05, 'titulo': 'El sapo y la mariposa', 'descripcion': 'Cuento', 'fechaAlta': '01/12/2018', 'deathline': '01/07/2019', 'observaciones': 'Cuento infantil', 'estado': 'terminada' },
    {'codigo': 09, 'titulo': 'el vendedor de sueños', 'descripcion': 'comedia', 'fechaAlta': '16/04/2022', 'deathline': '23/08/2023', 'observaciones': 'Comedia adolescente', 'estado': 'pendiente' }
];



/**
 * Ejercicio 2:
 * En esta segunda parte, te proponemos diseñar las siguientes funciones para gestionar
AlmacenamientoTareas:
1. AgregarTarea, para agregar una nueva tarea.
2. EditarTarea, que recibe una tarea y la modifica.
3. BorrarTarea, que borra una tarea ya existente.
4. ReporteTodasTareas, que devuelve todas las tareas.
5. ReporteTareasEnCurso, que devuelve las tareas cuyo estado es ‘en-curso’.
6. ReporteTareasPendientes, que devuelve las tareas cuyo estado es ‘pendiente’.
7. ReporteTareasTerminadas, que devuelve las tareas cuyo estado es ‘terminada’.

 */

function agregarTarea(tarea) {
    almacenamientoTareas.push(tarea)
}
function editarTarea(tarea){
    let aux = almacenamientoTareas;
    if (aux.length < 0) return console.log('No hay Tareas almacenadas');
    for (let i = 0; i < aux.length; i++) {
        if (aux[i].codigo !== tarea.codigo){
            aux[i].titulo = tarea.titulo;
            aux[i].descripcion = tarea.descripcion;
            aux[i].fechaAlta = tarea.fechaAlta;
            aux[i].deathline = tarea.deathline;
            aux[i].observaciones = tarea.observaciones;
            aux[i].estado = tarea.estado;
            return console.log('Tarea actualizada');
        }  
    }
    return console.log('Esta tarea no esta almacenada');
}
function borrarTarea(tarea) {
    let aux = almacenamientoTareas;
    for (let i = 0; i < aux.length; i++) {
        if (aux[i].codigo !== tarea.codigo){
            aux.splice(i, 1)
            return console.log('Tarea eliminada');
        }  
    }
    return console.log('Esta tarea no esta almacenada');
}

function reporteTodasTareas(array){
    array.toString();
}
function reporteTareasEnCurso(array){
    let enCurso = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].estado === 'en-curso') enCurso.push(array[i]) 
    }
    console.log('Tareas en curso' + enCurso.toString());
    return enCurso;
}
function reporteTareasPendientes(array){
    let pendiente = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].estado === 'pendiente') pendiente.push(array[i]) 
    }
    console.log('Tareas Pendientes' + pendiente.toString());
    return pendiente;
}
function reporteTareasTerminadas(array){
    let terminadas = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].estado === 'terminadas') terminadas.push(array[i]) 
    }
    console.log('Tareas Terminadas' + terminadas.toString());
    return terminadas;
}