import React from "react";
import EducationEntriesForm from "./EducationEntriesForm";
import GeneralInfoForm from "./GeneralInfoForm";
import PracticalEntriesForm from "./PracticalEntriesForm";
import Preview from "./Preview";

const ActiveForm = (props)=>{
    const displayActiveForm = ()=>{
        const { activeForm } = props.state;

        if(activeForm === "general") return <GeneralInfoForm state={props.state} methods={props.methods}/>
        // if(activeForm === "education"){
        //     return <EducationEntriesForm addEducationEntry={addEducationEntry} educationEntries = {educationEntries} handleEntryChange={handleEntryChange}/>
        // }
        // if(activeForm === "practical") 
        //     return <PracticalEntriesForm 
        //                 addPracticalEntry = {addPracticalEntry}
        //                 handleEntryChange = {handleEntryChange}
        //                 practicalEntries = {practicalEntries}

        //             />
        return <Preview 
                    state ={props.state} methods={props.methods}
                />
    }
    return(
        <div id= "active-form">
            {displayActiveForm()}
        </div>
    )
}

export default ActiveForm;