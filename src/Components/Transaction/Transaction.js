import React from "react";
import "./Transaction.css";
import InputField from "../InputField/Input"
import Item,{ItemCover} from "../Item/Item";
import AddNewBtn from "../AddNew/AddNew";



function Transaction(){

    let date=new Date()
    let getDate=date.toLocaleDateString()
    
    return(
        <>

            <AddNewBtn/>

            
            <div className="Heading-div">
                <h1>Transaction</h1>
                <p style={{marginLeft:"10px"}}>Today: </p>
                <p style={{marginLeft:"10px"}}>{getDate}</p>
            </div>


            <InputField></InputField>


            <div className="transaction_div" style={{fontWeight:600}} >
                <p>Total:</p>
                <p><span className="transaction_div--total" >2000</span> $</p>
            </div>


            <ItemCover date="2022-03-0" >
                <Item name="Sim Card" price="-6" date="2022-03-05" time="04:01:10" style={{color:"blue"}} />
                <Item name="Mobile" price="-200" date="2022-03-05" time="07:06:10" />
            </ItemCover>


            <ItemCover date="2021-03-01">
                <Item name="Food" price="-10" date="2021-03-01" time="22:50:00" />
                <Item name="Back Cover" price="-3" date="2021-03-01" time="11:15:00" />
            </ItemCover>


            <ItemCover date="2020-09-07">
                <Item name="Pizza" price="-20" date="2020-09-07" time="22:10:00" />
                <Item name="Park" price="-15" date="2020-09-07" time="01:19:00" />
            </ItemCover>


            <ItemCover date="2019-04-06">
                <Item name="Movie" price="-200" date="2019-04-06" time="20:58:00" />
                <Item name="Pillow" price="-15" date="2019-04-06" time="02:01:00" />
                <Item name="Potato" price="-3" date="2019-04-06" time="21:05:00" />
                <Item name="Oil" price="-4" date="2019-04-06" time="22:19:00" />
                <Item name="T-Shirt" price="-20" date="2019-04-06" time="24:15:00" />
            </ItemCover>
        </>
    )
}






export default Transaction;