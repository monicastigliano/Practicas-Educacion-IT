import React, { useEffect , useState} from "react"
import { Link, Outlet } from "react-router-dom"

function Maestro(){
    const [usuarios, setUsuarios] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(valor => valor.json())
        .then(user => setUsuarios(user))
        .catch(err => (console.log(err)))
    }
    )
    return(
        <>
            <h1>Usuarios</h1>
            <ul>
                {usuarios.map((element, i) =>(
                    <li key={i}>
                        <Link to={`/user/${element.id}`}>{element.id}</Link>
                        {element.name}
                    </li>
                ))}
            </ul>
            <hr />
            <Outlet/>
        </>
    )
}

export default Maestro;