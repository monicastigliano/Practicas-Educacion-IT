import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import axios from "axios";


function FormCliente(props) {
    const [user, setUser] = useState({})
    console.log(props);
    useEffect(()=>{
        axios.get(`http://localhost:3001/clientes/${user.id}`).then((resp) => {
      this.setUser(resp.data);
    });
    })
    const inputChange = (evt) =>{
        let setUser = { ...user};
        setUser[evt.target.name] = evt.target.value;
        setUser(setUser);
      }
      
        return (
          <div className="w-50 mx-auto">
            Nombre:
            <input
              type="text"
              name="nombre"
              className="form-control"
              value={user.nombre}
              onChange={inputChange.bind(this)}
            />
            Apellido:
            <input
              type="text"
              name="apellido"
              className="form-control"
              value={user.apellido}
              onChange={inputChange.bind(this)}
            />
            <button
              className="btn btn-primary float-end mt-2"
              onClick={() => {
                axios.put(`http://localhost:3001/clientes/${user.id}`, this.state).then(() => {
                    
                    <Link to={`/clientes`}> Editar </Link>
                });
              }}
            >
              Actualizar
            </button>
          </div>
        );
      }
    

export default FormCliente;