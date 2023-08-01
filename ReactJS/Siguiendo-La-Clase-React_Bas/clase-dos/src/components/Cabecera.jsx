import "bootstrap/dist/css/bootstrap.css"


export default function Cabecera(props){
    return(
        <header className="alert alert-info text-center">
            <h1 className="display-1">{ props.titulo}</h1>
            <h3 className="display-2"> { props.subtitulo}</h3>
        </header>
    )
}