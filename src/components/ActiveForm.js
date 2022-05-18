import React from "react";
import EducationEntriesForm from "./EducationEntriesForm";
import GeneralInfoForm from "./GeneralInfoForm";
import PracticalEntriesForm from "./PracticalEntriesForm";
import Preview from "./Preview";

const ActiveForm = (props)=>{
    const { activeForm, handleChange, handleEntryChange, generalInfo, 
            addEducationEntry, educationEntries, deleteEntry, 
            addPracticalEntry, handlePracticalEntryChange, practicalEntries } = props;

    const displayActiveForm = ()=>{
        if(activeForm === "general") return <GeneralInfoForm handleChange={handleChange} generalInfo = {generalInfo}/>
        if(activeForm === "education"){
            return <EducationEntriesForm addEducationEntry={addEducationEntry} educationEntries = {educationEntries} handleEntryChange={handleEntryChange}/>
        }
        if(activeForm === "practical") 
            return <PracticalEntriesForm 
                        addPracticalEntry = {addPracticalEntry}
                        handleEntryChange = {handleEntryChange}
                        practicalEntries = {practicalEntries}

                    />
        return <Preview 
                    handleChange={handleChange} 
                    generalInfo = {generalInfo} 
                    educationEntries = {educationEntries} 
                    practicalEntries = {practicalEntries}
                    deleteEntry ={deleteEntry}
                />
    }
    return(
        <div id= "active-form">
            {displayActiveForm()}
        </div>
    )
}

export default ActiveForm;