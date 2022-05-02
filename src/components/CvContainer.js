import React from "react";
import ActiveForm from "./ActiveForm";
import SectionSidebar from "./SectionSidebar";
import "./CvContainer.css"
import Preview from "./Preview";

const CvForm = ()=>{
    return(
        <div id= "cv-container">
            <SectionSidebar />
            <ActiveForm />
            <Preview />
        </div>
    )
}

export default CvForm;