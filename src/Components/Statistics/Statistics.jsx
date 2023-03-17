import React from "react";
import "./Statistics.css";
import {SelectDate} from "../SelectDate/SelectDate"
import { StatusCard } from "../Cards/Card";

function Statistics(){
    return (

        <div className="Statistics-div">
            <h1>Statistics</h1>
            

            <div className="SelectDate-div">
                <SelectDate for="From: "  ></SelectDate>
                <SelectDate for="To: "   ></SelectDate>
            </div>


            <div style={{display:"flex",gap:"100px",justifyContent:"center",marginTop:"40px"}}>
                <StatusCard for="Spent" price="1000" ></StatusCard>
                <StatusCard for="Get" price="1200" ></StatusCard>
            </div>



        </div>
    )
}

export default Statistics;