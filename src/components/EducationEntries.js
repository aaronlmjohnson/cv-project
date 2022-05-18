import React from "react";

const EducationEntries = (props)=>{
    const { educationExperience, deleteEntry } = props;
    
    return educationExperience.map((entry)=>{
        return(
            <li className="education-entry" key={entry.id} react-key={entry.id}>
                <p id="school"><span id="degree">{entry.degree}</span>, {entry.school}</p> 
                <p id="education-date-range">From: {entry.schoolStartDate} to {entry.schoolEndDate}</p>
                <button className="edit-entry">Edit</button>
                <button className="delete-entry" onClick={(e)=>deleteEntry(e, "educationEntries")}>Delete</button>
                <br/>
                <br/>
            </li>

        ) 
    });
}

export default EducationEntries;


{/* */}