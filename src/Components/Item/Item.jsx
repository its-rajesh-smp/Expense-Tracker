import React, { useState } from "react";
import "./Item.css"
import AddEditCard from '../AddEditCard/AddEditCard'



function ItemCover(props){
    return(
        <div className="Item_Cover-div">
            <span className="Item_Cover-div--span">{props.date}</span>
            {props.children}
        </div>
    )
}


function Item(props){
    let [value,func]=useState(false)

    function openEditor(){
        if(value==true){return}
        else{func(true)}
    }

    return (

        <div className="item" onClick={openEditor}>
            {value && <AddEditCard name={props.name} date={props.date} time={props.time} price={props.price}  />}
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