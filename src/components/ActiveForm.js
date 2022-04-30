import React from "react";
import EducationInfoForm from "./EducationInfoForm";
import GeneralInfoForm from "./GeneralInfoForm";
import PracticalInfoForm from "./PracticalInfoForm";

const ActiveForm = ()=>{
    return(
        <div id= "active-form">
            <GeneralInfoForm />
            <br/>
            <EducationInfoForm />
            <br/>
            <PracticalInfoForm />
        </div>
    )
}

export default ActiveForm;