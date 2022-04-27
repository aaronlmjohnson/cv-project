import React from "react";
import ActiveForm from "./ActiveForm";
import SectionSidebar from "./SectionSidebar";
import "./CvContainer.css"

const CvForm = ()=>{
    return(
        <div id= "cv-container">
            <SectionSidebar />
            <ActiveForm />
        </div>
    )
}

export default CvForm;