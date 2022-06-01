import React from "react";
import EducationEntriesForm from "./EducationEntriesForm";
import GeneralInfoForm from "./GeneralInfoForm";
import PracticalEntriesForm from "./PracticalEntriesForm";
import Preview from "./Preview";

const ActiveForm = (props)=>{
    const displayActiveForm = ()=>{
        const { activeForm } = props.state;

        if(activeForm === "general") 
            return <GeneralInfoForm state={props.state} methods={props.methods}/>
        if(activeForm === "education")
            return <EducationEntriesForm state={props.state} methods={props.methods}/>
        
        if(activeForm === "practical") 
            return <PracticalEntriesForm state={props.state} methods={props.methods}/>
        return <Preview state ={props.state} methods={props.methods}/>
    }
    return(
        <div id= "active-form">
            {displayActiveForm()}
        </div>
    )
}

export default ActiveForm;