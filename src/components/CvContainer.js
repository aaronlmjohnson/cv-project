import React from "react";
import ActiveForm from "./ActiveForm";
import SectionSidebar from "./SectionSidebar";
import "./CvContainer.css"
const data = require("../cvData.json");

const CvForm = (props)=>{
    const { activeForm } = props;
    return(
        <div id= "cv-container">
            <SectionSidebar />
            <ActiveForm  activeForm = {activeForm}/>
        </div>
    )
}

export default CvForm;