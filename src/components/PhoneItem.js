import React from "react";

const PhoneItem = (props)=>{
    return( 
        <li class="form-item">
            <label htmlFor={props.name}> {props.value} </label>
            <input type="tel" id ={props.id} name={props.name}/>
        </li>
    );
}

export default PhoneItem;