//Sintaxis de un Componente de Clase

import React, {Component} from "react";
import PropTypes from "prop-types" ;
import "bootstrap/dist/css/bootstrap.css";



class PieDePagina extends Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(<footer className="alert alert-warning fixed-bottom text-center">
            {this.props.texto}

        </footer>)
    }
}


//Información para el desarrollador
PieDePagina.propTypes = {
    texto: PropTypes.string.isRequired
}

export default PieDePagina;



