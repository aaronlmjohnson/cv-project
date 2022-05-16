import React from "react";
import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import FormHeader from "./FormHeader";
import PracticalSection from "./PracticalSection";
import "./Preview.css";

const Preview = (props)=>{
    //const {generalInfo, educationExperience, practicalExperience } = props.preview;
    const {fullName} = props.generalInfo;
    const {handleChange, educationEntries} = props;

    return(
        
        <div id="preview">
            <FormHeader id={"full-name-preview"} value={fullName}/>
            <ContactSection generalInfo = { props.generalInfo }/>
            <EducationSection educationEntries = {educationEntries}/>
            {/* <EducationSection educationExperience = { educationExperience }/>
            <PracticalSection practicalExperience = { practicalExperience } /> */}
        </div>
    )
}

export default Preview;