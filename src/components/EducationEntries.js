import React from "react";

const EducationEntries = (props)=>{
    const { educationExperience } = props;
    
    return educationExperience.map((entry)=>{
        return(
            <li className="education-entry" key={entry.id}>
                <p id="school">{entry.school}</p> 
                {/* <p id="education-date-range">From: {entry.startDate} to {entry.endDate}</p> */}
                <button className="edit-entry">Edit</button>
                <button className="delete-entry">Delete</button>
                <br/>
                <br/>
            </li>

        ) 
    });
}

export default EducationEntries;


{/* <span id="degree">{entry.degree}</span>,  place within school paragraph*/}