import React from "react";
import FormHeader from "./FormHeader";
import EducationEntries from "./EducationEntries";

const EducationSection = (props)=>{
    const { educationEntries, deleteEntry } = props;

    const displayHeader = ()=>{
        if(educationEntries.length > 0)
            return <FormHeader id={"education-experience-header"} value="Education Experience" />

    }
    return( 
        <div id="education-section">
            <ul id="education-entries">
                {displayHeader()}
                <EducationEntries educationExperience = {educationEntries} deleteEntry = {deleteEntry} />
            </ul>
        </div>
    );
}

export default EducationSection;