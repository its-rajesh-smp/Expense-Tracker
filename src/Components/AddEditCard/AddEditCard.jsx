import React, { useState } from "react";
import Item from "../Item/Item"
import './AddEditCard.css'

function EditCard(props) {

    let [name, Fname]=useState(props.name)
    let [date, Fdate]=useState(props.date)
    let [time, Ftime]=useState(props.time)
    let [price,Fprice]=useState(props.price)

    function changeData(){

        Fname(document.querySelector('.Add_or_Edit_input-name').value)
        Fdate (document.querySelector('.Add_or_Edit_input-date').value)
        Ftime (document.querySelector('.Add_or_Edit_input-time').value)
        Fprice(document.querySelector('.Add_or_Edit_input-price').value)

    }

    return (
        <div className="blur" >

            <div className="Add_Edit_Card">
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >
                    <p className="Add_or_Edit">Edit</p>
                    <i style={{fontSize:"30px",cursor:"pointer"}} className='bx bx-window-close'></i>
                </div>

                <div className="Add_or_Edit_list" >
                    <Item  name={name} price={price} date={date} time={time}/>
                </div>

                <div className="Add_or_Edit_input">
                    <input className="Add_or_Edit_input-name" type="text" placeholder="Enter Name" defaultValue={name} />
                    <div>
                        <input className="Add_or_Edit_input-date" type="date" defaultValue={date} />
                        <input className="Add_or_Edit_input-time" type="time" defaultValue={time} />
                    </div>
                    <input className="Add_or_Edit_input-price" type="number" defaultValue={price} />
                    <button onClick={changeData} className="Add_or_Edit_input-button"><i className='bx bx-message-square-add'></i></button>
                </div>

            </div>

        </div>
    )
}

export {EditCard}