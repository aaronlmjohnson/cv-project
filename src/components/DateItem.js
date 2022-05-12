import React from "react";

const DateItem = (props)=>{
    return( 
        <li className="form-item">
            <label htmlFor={props.name}> {props.labelValue} </label>
            <input type="date" id ={props.id} name={props.name} value={props.dateValue} onChange={props.handleChange}/>
        </li>
    );
}

export default DateItem;