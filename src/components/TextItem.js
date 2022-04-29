import React from "react";

const TextItem = (props)=>{
    return( 
        <li className="form-item">
            <label htmlFor={props.name}> {props.value} </label>
            <input type="text" id ={props.id} name={props.name}/>
        </li>
    );
}

export default TextItem;