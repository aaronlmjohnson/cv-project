import React from "react";

const SectionButton = (props)=>{
    return(
        <button className="section-button" name = {props.name}>
            {props.value}
        </button>
    )
}

export default SectionButton;