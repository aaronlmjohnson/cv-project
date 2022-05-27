import React from "react";

const EducationEntries = (props)=>{
    const { educationExperience, deleteEntry, toggleEditStatus } = props;
    
    const displayEntry = (entry)=>{
        console.log(entry)
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
            return(<div>Edit this</div>)
        }
    }


    return educationExperience.map((entry)=>{
        console.log(entry.isBeingEdited)
        return(
                displayEntry(entry)
        ) 
    });
}

export default EducationEntries;


{/* */}