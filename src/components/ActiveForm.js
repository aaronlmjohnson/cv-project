import React from "react";
import EducationInfoForm from "./EducationInfoForm";
import GeneralInfoForm from "./GeneralInfoForm";
import PracticalInfoForm from "./PracticalInfoForm";
import Preview from "./Preview";

const ActiveForm = (props)=>{
    const { activeForm, handleChange, generalInfo } = props;

    const displayActiveForm = ()=>{
        if(activeForm === "general") return <GeneralInfoForm handleChange={handleChange} generalInfo = {generalInfo}/>
        if(activeForm === "education") return <EducationInfoForm />
        if(activeForm === "practical") return <PracticalInfoForm />
        return <Preview generalInfo = {generalInfo}/>
    }
    return(
        <div id= "active-form">
            {displayActiveForm()}
        </div>
    )
}

export default ActiveForm;