import React from "react";
import "./user.css"

import Address from "./Address";
import Company from "./Company";


class User extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            usuario: {}
        }
    }

   
    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
        .then(valor => valor.json())
        .then(valor => (this.setState({usuario: valor})))
        .catch(err => {
            console.log(err)
        })
    }
    
    render(){
        return(
            <div className="usuario">
                <h1>{this.state.usuario.name}</h1>
                <br/>
                <div>{this.state.usuario.username}</div>
                <div>{this.state.usuario.email}</div>
                <div>{this.state.usuario.phone}</div>
                <div>{this.state.usuario.website}</div>
                {/* <Address user={this.state.usuario}/> */}
                {/* <Company user={this.state.usuario}/> */}
            </div> 
            )
    }
}

export default User;