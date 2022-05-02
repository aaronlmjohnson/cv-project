import React from "react";
import ActiveForm from "./ActiveForm";
import SectionSidebar from "./SectionSidebar";
import "./CvContainer.css"
import Preview from "./Preview";

const CvForm = ()=>{
    const data = {fullName:"Aaron Johnson", email:"aaron@gmail.com", phone: "123-456-7890"}
    return(
        <div id= "cv-container">
            <SectionSidebar />
            <ActiveForm />
            <Preview preview={data}/>
        </div>
    )
}

export default CvForm;