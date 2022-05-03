import React from "react";
import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import FormHeader from "./FormHeader";
import PracticalSection from "./PracticalSection";
import "./Preview.css";

const Preview = (props)=>{
    
    const {generalInfo, educationExperience, practicalExperience } = props.preview;

    return(
        <div id="preview">
            <FormHeader id={"full-name-preview"} value={generalInfo.fullName}/>
            <ContactSection generalInfo = { generalInfo }/>
            <EducationSection educationExperience = { educationExperience }/>
            <PracticalSection practicalExperience = { practicalExperience } />
        </div>
    )
}

export default Preview;