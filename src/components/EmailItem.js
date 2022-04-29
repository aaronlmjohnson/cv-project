import React from "react";

const EmailItem = (props)=>{
    return( 
        <li className="form-item">
            <label htmlFor={props.name}> {props.value} </label>
            <input type="email" id ={props.id} name={props.name}/>
        </li>
    );
}

export default EmailItem;