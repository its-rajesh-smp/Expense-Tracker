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



function StatusCard(props){
    return(
        <div className="Status_Card">
            <p className="Status_Card-for" >{props.for}</p>
            <p><span className="Status_Card-price">{props.price}</span> $</p>
        </div>

    )
}

export {SideNavCard,StatusCard};