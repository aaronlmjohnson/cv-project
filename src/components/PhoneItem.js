import React from "react";

const PhoneItem = (props)=>{
    return( 
        <li className="form-item">
            <label htmlFor={props.name}> {props.labelValue} </label>
            <input type="tel" id ={props.id} name={props.name} value={props.phoneValue} onChange={props.handleChange}/>
        </li>
    );
}

export default PhoneItem;