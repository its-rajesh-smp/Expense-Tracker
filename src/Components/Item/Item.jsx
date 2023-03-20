import React, { useState } from "react";
import "./Item.css"



// Iterm Wrapper Card
function ItemCover(props){
    return(
        <div className="Item_Cover-div">
            <span className="Item_Cover-div--span">{props.date}</span>
            {props.children}
        </div>
    )
}



//! Item Card
function Item(props){

    return (

        <div className="item">
            <div className="item-div">
                <p className="item_Name">{props.name}</p>
                <div className="item-div--div" >
                    <p className="item_Date" >{props.date}</p>
                    <p className="item_Time" >{props.time}</p>
                </div>
            </div>
            <p><span className="item_Price">{props.price}</span> $</p>
        </div>
    )
}





export default Item;
export  {ItemCover};