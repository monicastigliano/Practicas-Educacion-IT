import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";





class Clientes extends Component {
  constructor(props) {
    super(props);
    this.state = {clientes: [] };
    
    
  }
  componentDidMount() { 

    axios.get(`http://localhost:3001/clientes`).then((resp)=>{
      this.setState({clientes: resp.data})
    });
  }
  
  render() {
    return (
      <>
        <h1>Clientes</h1>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>apellido</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.clientes.map((c)=>{
              return(
                <tr key={c.id}>
                  <td>{c.nombre}</td>
                  <td>{c.apellido}</td>
                  <td>
                     
                      <Link to={`/cliente/${c.id}`}> Editar </Link>
                      
                   
                     
                   
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        
      </>
    )
  }
}

export default Clientes;
