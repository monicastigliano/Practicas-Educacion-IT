import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";

function Detalle(){
    const [detalle, setDetalle] = useState({})
    const {id} = useParams()

    const navigate = useNavigate();

    if(id === "4") navigate("/");

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(user => user.json())
        .then(user => setDetalle(user))
    })

    return(
        <div>
           { <ul>
                <div key={detalle.id}>{detalle.id}</div>
                <div>{detalle.name}</div>
                <div>{detalle.email}</div>
                <div>{detalle.username}</div>
            </ul>
            }
        </div>
    )

}

export default Detalle;