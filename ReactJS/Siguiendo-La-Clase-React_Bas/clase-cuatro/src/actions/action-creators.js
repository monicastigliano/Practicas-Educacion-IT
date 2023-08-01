import * as tipos from "./actions-types";

export default function acrtAgregarTarea(nombre){
    return({
        type: tipos.ACT_TAREA_AGREGAR,
        nombre: nombre
    })
}