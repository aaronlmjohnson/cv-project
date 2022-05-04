import React from "react";
import EducationInfoForm from "./EducationInfoForm";
import GeneralInfoForm from "./GeneralInfoForm";
import PracticalInfoForm from "./PracticalInfoForm";
import Preview from "./Preview";

const ActiveForm = ()=>{
    return(
        <div id= "active-form">
            <GeneralInfoForm />
            {/* <EducationInfoForm />
            <PracticalInfoForm />
            <Preview preview={data}/> */}
        </div>
    )
}

export default ActiveForm;