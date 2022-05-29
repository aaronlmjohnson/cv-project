import React from "react";
import ActiveForm from "./ActiveForm";
import SectionSidebar from "./SectionSidebar";
import "./CvContainer.css"
//const data = require("../cvData.json");

const CvForm = (props)=>{
    
    return(
        <div id= "cv-container">
            <SectionSidebar changeForm = {props.methods.changeForm}/>
            <ActiveForm  
                state = {props.state}
                methods = {props.methods}
            />
        </div>
    )
}

export default CvForm;