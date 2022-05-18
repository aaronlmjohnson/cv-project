import React from "react";
import PracticalTasks from "./PracticalTasks";

const PracticalEntries = (props)=>{
    const { practicalEntries } = props;

    return practicalEntries.map((entry)=>{
        return(
            <li className="practical-entry" key={entry.id}>
                <p id="company"><span id="position">{entry.position}</span> at {entry.company}</p>
                <p id="practical-date-range">From: {entry.workStartDate} to {entry.workEndDate}</p>
                <PracticalTasks duties={entry.tasks}/>
                <br/>
                <button className="edit-entry">Edit</button>
                <button className="delete-entry">Delete</button>
                <br/>
            </li>
            
        ) 
    })
}

export default PracticalEntries;