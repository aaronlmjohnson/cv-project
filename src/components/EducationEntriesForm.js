import React from "react";
import DateItem from "./DateItem";
import FormHeader from "./FormHeader";
import EducationInfoForm from "./EducationInfoForm";

const EducationEntriesForm = ()=>{
    const addEntry = ()=>{
        return <button id="add-education-entry">Add Entry</button>
    }

    return(
        <div id="educational-experience-entries-form-container">
            <FormHeader id="education-entries-form-header" value="Educational Experience:"/>
            {addEntry()}
            {/* <EducationInfoForm /> */}
        </div> 
    )
}

export default EducationEntriesForm;