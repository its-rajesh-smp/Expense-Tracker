import React, { useState } from "react"
import "./SillyComponent.css"


//!==============HEADING__DIV
function HeadingDiv(props){
    let date=new Date()
    let getDate=date.toLocaleDateString()
    
    return (
        <div className="Heading-div">
            <h1>{props.name}</h1>
            <p style={{marginLeft:"10px"}}>Today: </p>
            <p style={{marginLeft:"10px"}}>{getDate}</p>
        </div>

    )
}

//!===============TOTAL__AMOUNT
function TotalAmount(props){
    return(
        <div className="TotalAmount-Div" style={{fontWeight:600}} >
            <p>Total:</p>
            <p><span>{props.amount}</span> $</p>
        </div>
    )
}



//!===============TitleWithIcon
function TitleWithIcon(props){
    return(
        <div className="TitleWithIcon-div">
            <p >{props.title}</p>
            {props.icon}
        </div>
    )
}

//!==============InputFieldForAdd
function InputFieldAddEdit(props){

    const[name,setName]=useState()
    const[date,setDate]=useState()
    const[time,setTime]=useState()
    const[price,setPrice]=useState()

    // Updating newExpenseData of AddExpenseCard
    props.getData.name=name
    props.getData.date=date
    props.getData.time=time
    props.getData.price=price

    return (
        <div className="InputFieldAddEdit-div">
        <input className="InputFieldAddEdit-name" type="text" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}}  />
            <div>
                <input className="InputFieldAddEdit-date" type="date" onChange={(e)=>{setDate(e.target.value)}} />
                <input className="InputFieldAddEdit-time" type="time" onChange={(e)=>{setTime(e.target.value)}}  />
            </div>
        <input className="InputFieldAddEdit-price" type="number" onChange={(e)=>{setPrice(e.target.value)}} />
    </div>
    )
}



export {HeadingDiv,TotalAmount,TitleWithIcon,InputFieldAddEdit}