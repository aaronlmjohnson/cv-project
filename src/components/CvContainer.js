import React from "react";
import ActiveForm from "./ActiveForm";
import SectionSidebar from "./SectionSidebar";
import "./CvContainer.css"
import Preview from "./Preview";
const data = require("../cvData.json");

const CvForm = ()=>{

    return(
        <div id= "cv-container">
            <SectionSidebar />
            <ActiveForm />
            <Preview preview={data}/>
        </div>
    )
}

export default CvForm;