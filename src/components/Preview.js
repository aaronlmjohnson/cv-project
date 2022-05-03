import React from "react";
import FormHeader from "./FormHeader";
import "./Preview.css";

const Preview = (props)=>{

    const {generalInfo, educationExperience, practicalExperience } = props.preview;
    const displayEducationExperience = ()=>{
        return educationExperience.map((entry)=>{
            return(
                <li className="education-entry" key={entry.id}>
                    <p id="school"><span id="degree">{entry.degree}</span>, {entry.school}</p>
                    <p id="education-date-range">From: {entry.startDate} to {entry.endDate}</p>
                    <br/>
                </li>
            ) 
        })
    }

    const displayPracticalExperience = ()=>{
        return practicalExperience.map((entry)=>{
            return(
                <li className="practical-entry" key={entry.id}>
                    <p id="company"><span id="position">{entry.position}</span> at {entry.company}</p>
                    <p id="practical-date-range">From: {entry.startDate} to {entry.endDate}</p>
                    <br/>
                </li>
            ) 
        })
    }
    return(
        <div id="preview">
            <FormHeader id={"full-name-preview"} value={generalInfo.fullName}/>
            <ul id="contact-info-section">
                <FormHeader id={"contact-header"} value="Contact Information" />
                <li id="contact-email">{ generalInfo.email }</li>
                <li id="phone">{ generalInfo.phone} </li>    
            </ul>
            <ul id="education-section">
                <FormHeader id={"education-experience-header"} value="Education Experience" />
                {displayEducationExperience()}
            </ul>
            <ul id="practical-section">
                <FormHeader id={"practical-experience-header"} value="Practical Experience" />
                {displayPracticalExperience()}

            </ul>
        </div>
    )
}

export default Preview;