import React from "react";
import FormHeader from "./FormHeader";
import EducationEntries from "./EducationEntries";

const EducationSection = (props)=>{
    const { educationEntries } = props;
    console.log(educationEntries);
    return( 
        <div id="education-section">
            <ul id="education-entries">
                <FormHeader id={"education-experience-header"} value="Education Experience" />
                <EducationEntries educationExperience = {educationEntries} />
                
                {/* <EducationEntries educationExperience = { educationExperience} /> */}
            </ul>
        </div>
    );
}

export default EducationSection;