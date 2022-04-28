import React from "react";

const TextItem = (props)=>{
    return( 
        <li>
            <label htmlFor={props.name}> {props.value} </label>
            <input type="text" id ={props.id} name={props.name}/>
        </li>
    );
}

export default TextItem;