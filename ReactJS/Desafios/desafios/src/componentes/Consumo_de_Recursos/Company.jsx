import React from "react";
import "./user.css"

function Company(props){
    return (
        <div>
            <span>Company</span>
            <ul>
                <li>Name: {props.user.company.name}</li>
                <li>Catch Phrase: {props.user.company.catchPhrase}</li>
                <li>Business: {props.user.company.bs}</li>
            </ul>
        </div>
    )
}
export default Company;