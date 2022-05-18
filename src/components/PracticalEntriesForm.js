import React from "react";
import DateItem from "./DateItem";
import FormHeader from "./FormHeader";
import PracticalInfoForm from "./PracticalInfoForm";
import uniqid from "uniqid"

const PracticalEntriesForm = (props)=>{
    const {addPracticalEntry, handleEntryChange, practicalEntries} = props

    return(
        <div id="practical-experience-entries-form-container">
            <FormHeader id="practical-entries-form-header" value="Practical Experience:"/>
            <ul id="practical-entries-container">
                {practicalEntries.map(entry=>{
                    return <PracticalInfoForm entryInfo = {entry} handleEntryChange = {handleEntryChange} key={entry.id}/>
                })}
            </ul>
            <button id="add-practical-entry" onClick={addPracticalEntry}>Add Entry</button>
        </div> 
    )
}

export default PracticalEntriesForm;