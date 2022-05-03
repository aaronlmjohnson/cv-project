import React from "react";
import EducationEntries from "./EducationEntries";
import FormHeader from "./FormHeader";
import PracticalEntries from "./PracticalEntries";
import "./Preview.css";

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
            <ul id="education-section">
                <FormHeader id={"education-experience-header"} value="Education Experience" />
                <EducationEntries educationExperience = { educationExperience} />
            </ul>
            <ul id="practical-section">
                <FormHeader id={"practical-experience-header"} value="Practical Experience" />
                <PracticalEntries practicalExperience = { practicalExperience } />
            </ul>
        </div>
    )
}

export default Preview;