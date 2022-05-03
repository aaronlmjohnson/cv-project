import React from "react";
import ContactSection from "./ContactSection";
import EducationEntries from "./EducationEntries";
import FormHeader from "./FormHeader";
import PracticalEntries from "./PracticalEntries";
import "./Preview.css";

const Preview = (props)=>{
    
    const {generalInfo, educationExperience, practicalExperience } = props.preview;

    return(
        <div id="preview">
            <FormHeader id={"full-name-preview"} value={generalInfo.fullName}/>
            <ContactSection generalInfo = { generalInfo }/>
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