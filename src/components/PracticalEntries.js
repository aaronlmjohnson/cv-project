import React from "react";
import PracticalTasks from "./PracticalTasks";
import EditPracticalInfoForm from "./EditPracticalEntryForm";

const PracticalEntries = (props)=>{
    const { practicalEntries } = props;
    const { deleteEntry, toggleEditStatus } = props.methods;
    const displayEntry = (entry)=>{
        if(!entry.isBeingEdited){
            return (
                <li className="practical-entry" key={entry.id} react-key={entry.id}>
                    <p id="company"><span id="position">{entry.position}</span> at {entry.company}</p>
                    <p id="practical-date-range">From: {entry.workStartDate} to {entry.workEndDate}</p>
                    <PracticalTasks duties={entry.tasks}/>
                    <br/>
                    <button className="edit-entry"onClick={(e)=>toggleEditStatus(e, entry.id, "practicalEntries")}>Edit</button>
                    <button className="delete-entry" onClick={(e)=>deleteEntry(e, "practicalEntries")}>Delete</button>
                    <br/>
                </li>
            )
        }
        else{
            return (<EditPracticalInfoForm entryInfo ={entry} methods={props.methods}/>)
        }
    }

    return practicalEntries.map((entry)=>{
        return (displayEntry(entry));
    })
}

export default PracticalEntries;