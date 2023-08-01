//Creo mi tarjeta como un componente funcional
import "./tarjeta.css"
import Franja from './Franja';


function Tarjeta(props){
    return(
        <div className="tarjeta">
            <Franja/>
            <h1>{props.nombre}</h1>
            <span>{props.profesion}</span>
            <Franja/>
        </div>
    )
}

export default Tarjeta;