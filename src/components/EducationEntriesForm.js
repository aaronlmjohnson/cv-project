import React from "react";
import DateItem from "./DateItem";
import FormHeader from "./FormHeader";
import EducationInfoForm from "./EducationInfoForm";
import uniqid from "uniqid"

const EducationEntriesForm = (props)=>{
    const {addEducationEntry, educationEntries, handleEntryChange} = props

    return(
        <div id="educational-experience-entries-form-container">
            <FormHeader id="education-entries-form-header" value="Educational Experience:"/>
            <ul id="education-entries-container">
                {educationEntries.map(entry=>{
                    return (
                        <li className="educational-experience-form-container">
                            <EducationInfoForm entryInfo = {entry} handleEntryChange = {handleEntryChange} key={entry.id}/>
                        </li>
                    )
                })}
            </ul>
            <button id="add-education-entry" onClick={addEducationEntry}>Add Entry</button>
        </div> 
    )
}

export default EducationEntriesForm;