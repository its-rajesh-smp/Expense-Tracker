import React from "react";
import "./Input.css"
function InputField(){

    return (
        <div className="input_fields">
            <div>
                <i className='bx bx-search-alt'></i>
                <input type="text" placeholder="Search.." defaultValue="" />
            </div>
            <select>
                <option>Filter</option>
                <option>Today</option>
                <option>YesterDay</option>
                <option>Tomorrow</option>
            </select>

        </div>
    )
}


export default InputField;