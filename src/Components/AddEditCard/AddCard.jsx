import React,{useState} from "react"
import './AddEditCard.css'
import Item from "../Item/Item"



function AddCard(props){


    function disableHandeler(){
        props.effect(false) //it effect the AddNew Component because it is called from that component
    }

    

    // Set Current Date in Date Time Input Field
    //todo Change Time WRONG Time Showing
    var realtimeDate = new Date();
    var currentDate = realtimeDate.toISOString().substring(0,10);
    var currentTime = realtimeDate.toISOString().substring(11,16);

    let [name, Fname]=useState()
    let [date, Fdate]=useState(currentDate)
    let [time, Ftime]=useState(currentTime)
    let [price,Fprice]=useState()


    function listAddHandeler(){
        props.effect(false)
        props.listHandeler(
            (prev)=>{
                return [...prev,[<Item  name={name} price={price} date={date} time={time}/>]]
                /**
                 * It return a concadinated array of the previous item and new Item
                 */
            }
        )
    }



    return (
        <div className="blur" >

        <div className="Add_Edit_Card">
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >
                <p className="Add_or_Edit">Edit</p>


                <i onClick={disableHandeler /*Click To Disable*/} style={{fontSize:"30px",cursor:"pointer"}} className='bx bx-window-close'></i> 
            
            
            </div>

            <div className="Add_or_Edit_input">
                <input className="Add_or_Edit_input-name" type="text" placeholder="Enter Name" onChange={(e)=>Fname(e.target.value)} />
                <div>
                    <input className="Add_or_Edit_input-date" type="date" onChange={(e)=>Fdate(e.target.value)}  defaultValue={date}   />
                    <input className="Add_or_Edit_input-time" type="time"  onChange={(e)=>Ftime(e.target.value)} defaultValue={time}  />
                </div>
                <input className="Add_or_Edit_input-price" type="number" onChange={(e)=>Fprice(e.target.value)} />
                <button onClick={listAddHandeler /*Click To Add */ } className="Add_or_Edit_input-button"><i className='bx bx-message-square-add'></i></button>
            </div>

        </div>

    </div>
    )
}




export {AddCard}