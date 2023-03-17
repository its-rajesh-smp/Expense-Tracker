import React from "react";
import "./Item.css"


function Item_Cover(props){
    return(
        <div className="Item_Cover-div">
            <span className="Item_Cover-div--span">{props.date}</span>
            {props.children}
        </div>
    )
}


function Item(props){
    return (
        <div className="item" onClick={editListHandeler}>
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

function editListHandeler(){
    alert("Edit Function Called")
}



export default Item;
export  {Item_Cover};