import React from "react";
import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import FormHeader from "./FormHeader";
import PracticalEntries from "./PracticalEntries";
import "./Preview.css";

const Preview = (props)=>{
    
    const {generalInfo, educationExperience, practicalExperience } = props.preview;

    return(
        <div id="preview">
            <FormHeader id={"full-name-preview"} value={generalInfo.fullName}/>
            <ContactSection generalInfo = { generalInfo }/>
            <EducationSection educationExperience = { educationExperience }/>
            <ul id="practical-section">
                <FormHeader id={"practical-experience-header"} value="Practical Experience" />
                <PracticalEntries practicalExperience = { practicalExperience } />
            </ul>
        </div>
    )
}

export default Preview;