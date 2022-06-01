import React from "react";
import EditEducationEntryForm from "./EditEducationEntryForm";

const EducationEntries = (props)=>{
    const { deleteEntry, toggleEditStatus } = props.methods;
    const {educationExperience} = props;
    
    const displayEntry = (entry)=>{
        if(!entry.isBeingEdited){
            return (
                <li className="education-entry" key={entry.id} react-key={entry.id}>
                    <p id="school"><span id="degree">{entry.degree}</span>, {entry.school}</p> 
                    <p id="education-date-range">From: {entry.schoolStartDate} to {entry.schoolEndDate}</p>
                    <button className="edit-entry"onClick={(e)=>toggleEditStatus(e, entry.id, "educationEntries")}>Edit</button>
                    <button className="delete-entry" onClick={(e)=>deleteEntry(e, "educationEntries")}>Delete</button>
                    <br/>
                    <br/>
                </li>
            )
        }
        else{
            return (<EditEducationEntryForm entryInfo ={entry} methods={props.methods} key={entry.id}/>)
        }
    }


    return educationExperience.map((entry)=>{
        return(
                displayEntry(entry)
        ) 
    });
}

export default EducationEntries;