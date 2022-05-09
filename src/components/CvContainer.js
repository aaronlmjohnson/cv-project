import React from "react";
import ActiveForm from "./ActiveForm";
import SectionSidebar from "./SectionSidebar";
import "./CvContainer.css"
//const data = require("../cvData.json");

const CvForm = (props)=>{
    const { activeForm, changeForm , handleChange} = props;
    
    return(
        <div id= "cv-container">
            <SectionSidebar changeForm = {changeForm}/>
            <ActiveForm  
                activeForm = {activeForm}
                handleChange={handleChange}
                generalInfo = {props.generalInfo}
            />
        </div>
    )
}

export default CvForm;