import React from "react";
import ActiveForm from "./ActiveForm";
import SectionSidebar from "./SectionSidebar";
import "./CvContainer.css"
//const data = require("../cvData.json");

const CvForm = (props)=>{
    const { activeForm, changeForm , handleChange, handleEntryChange,
            generalInfo, educationEntries, addEducationEntry} = props;
    
    return(
        <div id= "cv-container">
            <SectionSidebar changeForm = {changeForm}/>
            <ActiveForm  
                activeForm = {activeForm}
                educationEntries = {educationEntries}
                handleChange={handleChange}
                handleEntryChange={handleEntryChange}
                generalInfo = {generalInfo}
                addEducationEntry = {addEducationEntry}
            />
        </div>
    )
}

export default CvForm;