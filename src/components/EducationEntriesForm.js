import React from "react";
import DateItem from "./DateItem";
import FormHeader from "./FormHeader";
import EducationInfoForm from "./EducationInfoForm";

const EducationEntriesForm = (props)=>{
    const {addEducationEntry} = props

    return(
        <div id="educational-experience-entries-form-container">
            <FormHeader id="education-entries-form-header" value="Educational Experience:"/>
            <button id="add-education-entry" onClick={addEducationEntry}>Add Entry</button>
            {/* <EducationInfoForm /> */}
        </div> 
    )
}

export default EducationEntriesForm;