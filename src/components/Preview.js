import React from "react";
import FormHeader from "./FormHeader";
import "./Preview.css"
const Preview = (props)=>{

    const {generalInfo, educationExperience, practicalExperience } = props.preview;

    return(
         
        <div id="preview">
            <FormHeader id={"full-name-preview"} value={generalInfo.fullName}/>
            <ul id="contact-info-section">
                <FormHeader id={"contact-header"} value="Contact Information" />
                <li id="contact-email">{ generalInfo.email }</li>
                <li id="phone">{ generalInfo.phone} </li>    
            </ul>
            <div id="experience-section">

            </div>
        </div>
    )
}

export default Preview;