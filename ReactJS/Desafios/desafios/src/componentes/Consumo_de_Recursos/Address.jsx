import React from "react"
import "./user.css"

function Address(props){
        return(    
            <div>
                <span>Address</span>
                <h3>{props.user.name}</h3>
                <ul>
                    <li>Street: {props.user.address.street}</li>
                    <li>Suite: {props.user.address.suite}</li>
                    <li>City: {props.user.address.city}</li>
                    <li>Zipcode: {props.user.address.zipcode}</li>
                    <li>
                    Geo 
                    <ul>
                        <li>Lat: {props.user.address.geo.lat}</li>
                        <li>Long: {props.user.address.geo.long}</li> 
                    </ul> 
                    </li> 
                </ul>  
            </div> 
        )
    
    
}
export default Address;
