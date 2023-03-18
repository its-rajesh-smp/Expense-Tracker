import React from "react";
import "./Statistics.css";
import { SelectDate } from "../SelectDate/SelectDate"
import { StatusCard } from "../Cards/Card";
import { CChart } from '@coreui/react-chartjs'

function Statistics() {
    return (

        <div className="Statistics-div">
            <h1>Statistics</h1>


            <div className="SelectDate-div">
                <SelectDate for="From: "  ></SelectDate>
                <SelectDate for="To: "   ></SelectDate>
                <button><i className='bx bx-search-alt'></i></button>
            </div>


            <div className="StatusCard-div">
                <StatusCard for="Spent" price="1000" ></StatusCard>
                <StatusCard for="Get" price="1200" ></StatusCard>
            </div>

            <div className="Statistics-div-chart-changer">
                <p className="for_heading">Monthly Status</p>
                <select name="" id="">
                    <option value="">Today</option>
                    <option value="">Monthly</option>
                    <option value="">Yearly</option>
                </select>
            </div>

            <CChart
               className="spent_get_chart"
                type="bar"
                data={{
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {
                            label: 'Spent',
                            backgroundColor: 'red',
                            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 80, 100, 120],

                        },
                        {
                            label: 'Get',
                            backgroundColor: 'green',
                            data: [20, 12, 90, 40, 80, 60, 49, 70, 30, 100, 100, 180],

                        }
                    ],

                }}
                labels="months"
            />




        </div>
    )
}

export default Statistics;