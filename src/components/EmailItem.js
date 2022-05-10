import React from "react";

const EmailItem = (props)=>{
    return( 
        <li className="form-item">
            <label htmlFor={props.name}> {props.labelValue} </label>
            <input type="email" id ={props.id} name={props.name} value={props.emailValue} onChange={props.handleChange}/>
        </li>
    );
}

export default EmailItem;