import React from "react";
import EducationEntriesForm from "./EducationEntriesForm";
import GeneralInfoForm from "./GeneralInfoForm";
import PracticalInfoForm from "./PracticalInfoForm";
import Preview from "./Preview";

const ActiveForm = (props)=>{
    const { activeForm, handleChange, handleEntryChange, generalInfo, addEducationEntry, educationEntries } = props;

    const displayActiveForm = ()=>{
        if(activeForm === "general") return <GeneralInfoForm handleChange={handleChange} generalInfo = {generalInfo}/>
        if(activeForm === "education"){
            return <EducationEntriesForm addEducationEntry={addEducationEntry} educationEntries = {educationEntries} handleEntryChange={handleEntryChange}/>
        }
        if(activeForm === "practical") return <PracticalInfoForm />
        return <Preview handleChange={handleChange} generalInfo = {generalInfo} educationEntries = {educationEntries}/>
    }
    return(
        <div id= "active-form">
            {displayActiveForm()}
        </div>
    )
}

export default ActiveForm;