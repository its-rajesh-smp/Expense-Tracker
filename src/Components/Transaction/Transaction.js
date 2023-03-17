import React from "react";
import "./Transaction.css";
import InputField from "../InputField/Input"
import Item,{Item_Cover} from "../Item/Item";
import AddNew from "../AddNew/AddNew";


function Transaction(){
    return(
        <>
            <AddNew></AddNew>
            <h1>Transaction</h1>
            <InputField></InputField>

            <div className="transaction_div" style={{fontWeight:600}} >
                <p>Total:</p>
                <p><span className="transaction_div--total" >2000</span> $</p>
            </div>


            <Item_Cover date="03/02/22" >
                <Item name="Sim Card" price="-6" date="03/02/22" time="09:20 AM" style={{color:"blue"}} />
                <Item name="Mobile" price="-200" date="03/02/22" time="08:00 AM" />
            </Item_Cover>


            <Item_Cover date="14/06/21">
                <Item name="Food" price="-10" date="14/06/21" time="01:28 PM" />
                <Item name="Back Cover" price="-3" date="14/06/21" time="10:25 AM" />
            </Item_Cover>


            <Item_Cover date="04/01/20">
                <Item name="Pizza" price="-20" date="04/01/20" time="01:28 PM" />
                <Item name="Park" price="-15" date="04/01/20" time="10:25 AM" />
            </Item_Cover>


            <Item_Cover date="13/11/20">
                <Item name="Movie" price="-200" date="13/11/20" time="01:28 PM" />
                <Item name="Pillow" price="-15" date="13/11/20" time="10:25 AM" />
                <Item name="Potato" price="-3" date="13/11/20" time="10:25 AM" />
                <Item name="Oil" price="-4" date="13/11/20" time="10:25 AM" />
                <Item name="T-Shirt" price="-20" date="13/11/20" time="10:25 AM" />
            </Item_Cover>
        </>
    )
}






export default Transaction;