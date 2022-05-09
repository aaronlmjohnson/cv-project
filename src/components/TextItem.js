import React from "react";

const TextItem = (props)=>{
    const { handleChange } = props;
    
    return( 
        <li className="form-item">
            <label htmlFor={props.name}> {props.labelValue} </label>
            <input type="text" id ={props.id} name={props.name} onChange={handleChange} value={props.textValue}/>
        </li>
    );
}

export default TextItem;