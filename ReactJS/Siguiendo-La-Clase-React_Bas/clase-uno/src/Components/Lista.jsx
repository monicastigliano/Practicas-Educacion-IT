import "bootstrap/dist/css/bootstrap.css";



//Sintaxis de un Componente Funcional


function Lista(props){
    return(
        <ul className="list-group">
           {
           /* alumnos.map((item)=>{
            return <li className="list-group-item" key={item.id}>{item.nombre}</li>
           }) */

           //Con parentesis el return es implicito
           props.items.map((item)=>(
             <li className="list-group-item" key={item.id}>{item.nombre}</li>
             ))
             }
        </ul>)
}

export default Lista; 