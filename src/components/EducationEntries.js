import React from "react";

const EducationEntries = (props)=>{
    const { educationExperience } = props;
    
    return educationExperience.map((entry)=>{
        return(
            <li className="education-entry" key={entry.id}>
                <p id="school"><span id="degree">{entry.degree}</span>, {entry.school}</p>
                <p id="education-date-range">From: {entry.startDate} to {entry.endDate}</p>
                <br/>
            </li>
        ) 
    });
}

export default EducationEntries;