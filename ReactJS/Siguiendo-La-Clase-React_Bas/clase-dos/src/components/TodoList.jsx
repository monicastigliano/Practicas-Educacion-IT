import React, {Component} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css"
import LightSpeed from 'react-reveal/LightSpeed';

// class TodoList extends React.Component{ si solo importamos React
class TodoList extends Component{
    nuevaTarea = "";

    constructor(props){
        super(props);
        this.state ={
            loading: true,
            nuevaTarea : "",
            tareas: [
                /* {id: 1, nombre: "Llegar a fin de mes", done: false},
                 {id: 2, nombre: "Estudiar React", done: false},
                 {id: 3, nombre: "Practicar Material UI", done: false},
                 {id: 4, nombre: "Hacer mi portfolio", done: false}*/
            ]
        }
    }

    componentDidMount(){
        setTimeout(() => {
            
            const url = 'http://localhost:3001/tareas'
            axios.get(url).then((resp) =>{
                this.setState({
                    loading: false,
                    tareas: resp.data
                })
            })
        }, 2000);
    }

    agregarTarea(){
        if(this.state.nuevaTarea.length > 0){this.setState({
            nuevaTarea : "",
            tareas: [
                ...this.state.tareas,
                {
                //        4                  [1, 2, 3, 4]           + 1  
                    id: Math.max(0, ...this.state.tareas.map(t => t.id)) + 1,
                    nombre: this.state.nuevaTarea,
                    done: false
                }
            ]
        })}
    }

    eliminarTarea(id){
        this.setState({
            tareas: this.state.tareas.filter((tarea)=>(tarea.id !== id))
        })
    }

    render(){
        return(
        <div>
            <ul className="list-group">
                <li className="list-group-item active">Lista de Tareas</li>
                {
                    // return implicito
                    this.state.loading ? <li className="list-group-item text-center">
                        <div className="spinner-border"></div>
                    </li>
                :this.state.tareas.map(tarea => 
                <li key={tarea.id} className="list-group-item d-flex"> 
                <LightSpeed left>
                    <span className="me-auto" >{tarea.nombre}</span>
                    <button className="btn btn-danger " onClick={this.eliminarTarea.bind(this, tarea.id)}>&#128465;</button>
                </LightSpeed>
                </li>)
                
                    // con {} hay que poner el return
                    // this.state.tareas.map(tarea => { return <li> {tarea.nombre}</li>})
                }
            </ul>
            <input type="text" 
                    className="form-control mt-2" 
                    placeholder="Ingrese una nueva tarea"
                    value={this.state.nuevaTarea}
                    onChange={(evt) => {this.setState({nuevaTarea : evt.target.value}) }}
                    />
            <button className="btn btn-primary float-end mt-1"
             {...(this.state.nuevaTarea.length===0)?{disabled:true}:{}}
             onClick={this.agregarTarea.bind(this) }>Agregar</button>
        </div>)
    }
}

export default TodoList;