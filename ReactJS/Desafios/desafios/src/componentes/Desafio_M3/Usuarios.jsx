import React, { useEffect, useState } from "react";

function Usuarios(){
    const [valor, setValor] = useState([])
    const url = `https://jsonplaceholder.typicode.com/users`

    useEffect(()=>{
        fetch(url)
        .then(val => val.json())
        .then(val => setValor(val))
    })
    
    return(
        <>
        <h1>Usuarios</h1>
        <ul>
            {
            valor.map((items, i) =>(
            <div key={i}>
                <span>{items.name} </span>
                <a href={`mailto:${items.email}`}>{items.email}</a>
            </div>))
            }
        </ul>
        </>
    )
}

export default Usuarios;