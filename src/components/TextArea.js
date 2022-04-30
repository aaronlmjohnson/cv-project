import React from "react";

const TextArea = (props)=>{
    return( 
        <li className="form-item">
            <label htmlFor={props.name}> {props.value} </label>

            <textarea  id ={props.id} name={props.name} rows="4" cols="50"></textarea>
        </li>
    );
}

export default TextArea;