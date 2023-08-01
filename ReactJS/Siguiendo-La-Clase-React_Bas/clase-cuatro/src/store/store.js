 import  { createStore } from "redux";
 import reducer from "../reducer/reducer";

 const defaultData = {
    tareas: [
    {id: 1, nombre: "Caminar por el parque", done: false},
    {id: 1, nombre: "Jugar al tenis", done: false},
    {id: 1, nombre: "Preparar la cena", done: false}
]}

export default createStore(reducer, defaultData);