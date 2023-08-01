import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css"



class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return (<div >
            <ul className='list-group'>
               {
                this.props.tareas.map((tarea) => {
                    return(
                    <li key={tarea.id} className='list-group-item'>{tarea.nombre}</li>
                    )
                })
               } 
            </ul>
        </div>  );
    }
}
 

export default TodoList;