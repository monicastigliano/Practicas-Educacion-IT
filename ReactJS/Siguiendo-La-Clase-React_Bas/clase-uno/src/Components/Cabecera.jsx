import "bootstrap/dist/css/bootstrap.css";

//Sintaxis de un Componente Funcional

function Cabecera(props){
    return (<div className="alert alert-info text-center">
        <h1>{ props.titulo}</h1>
        <h3>{ props.subtitulo}</h3>
    </div>)
}

export default Cabecera;