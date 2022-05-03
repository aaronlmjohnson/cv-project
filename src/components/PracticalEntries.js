import React from "react";
import PracticalDuties from "./PracticalDuties";

const PracticalEntries = (props)=>{
    const { practicalExperience } = props;

    return practicalExperience.map((entry)=>{
        return(
            <li className="practical-entry" key={entry.id}>
                <p id="company"><span id="position">{entry.position}</span> at {entry.company}</p>
                <p id="practical-date-range">From: {entry.startDate} to {entry.endDate}</p>
                <PracticalDuties duties={entry.duties}/>
                <br/>
                <button className="edit-entry">Edit</button>
                <button className="delete-entry">Delete</button>
            </li>
        ) 
    })
}

export default PracticalEntries;