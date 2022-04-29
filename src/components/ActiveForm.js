import React from "react";
import EducationInfoForm from "./EducationInfoForm";
import GeneralInfoForm from "./GeneralInfoForm";

const ActiveForm = ()=>{
    return(
        <div id= "active-form">
            <GeneralInfoForm />
            <br/>
            <EducationInfoForm />
        </div>
    )
}

export default ActiveForm;