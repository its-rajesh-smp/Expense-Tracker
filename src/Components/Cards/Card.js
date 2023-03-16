import React from "react";
import './Card.css';

function SideNavCard(props){
    return (
        <div className="SideNavCard" style={props.style} >
            {props.icon}
            <p>{props.name}</p>
        </div>
    )
}



export {SideNavCard};