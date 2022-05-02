import React from "react";
import FormHeader from "./FormHeader";
import "./Preview.css"
const Preview = (props)=>{
    return(
        
        <div id="preview">
            <FormHeader id={"full-name-preview"} value={props.preview.fullName}/>
            <div id="contact-info-section">

            </div>
            <div id="experience-section">

            </div>
        </div>
    )
}

export default Preview;