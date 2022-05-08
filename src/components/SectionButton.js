import React from "react";

const SectionButton = (props)=>{
    return(
        <button onClick = {props.changeForm} className="section-button" name = {props.name}>
            {props.value}
        </button>
    )
}

export default SectionButton;