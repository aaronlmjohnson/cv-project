import React from "react";
import FormHeader from "./FormHeader";
import EducationEntries from "./EducationEntries";

const EducationSection = (props)=>{
    const { educationExperience } = props;
    return( 
        <div id="education-section">
            <ul id="education-section">
                <FormHeader id={"education-experience-header"} value="Education Experience" />
                <EducationEntries educationExperience = { educationExperience} />
            </ul>
        </div>
    );
}

export default EducationSection;