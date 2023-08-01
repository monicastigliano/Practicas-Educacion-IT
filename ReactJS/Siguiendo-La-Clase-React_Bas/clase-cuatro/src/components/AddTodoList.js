import React, { Component } from 'react';

class AddTodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { nombreTarea: "" }
    }
    render() { 
        return ( <div className='mt-2'>
            <input 
                type="text" 
                value={this.state.nombreTarea} 
                className="form-control"
                placeholder="Ingrese la nueva tarea..." 
                onChange={(evt)=>{
                    this.setState({nombreTarea: evt.target.value})
            }}/>
            <button className='btn btn-primary float-end mt-2' onClick={()=>{
                this.props.agregarTarea(this.state.nuevaTarea);
                this.setState({nombreTarea:""})
            }}>Agregar</button>
        </div> );
    }
}
 
export default AddTodoList;