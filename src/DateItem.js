import React from "react";

const DateItem = (props)=>{
    return( 
        <li className="form-item">
            <label htmlFor={props.name}> {props.value} </label>
            <input type="date" id ={props.id} name={props.name}/>
        </li>
    );
}

export default DateItem;