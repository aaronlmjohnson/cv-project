import React from "react";
import FormHeader from "./FormHeader";
import PracticalEntries from "./PracticalEntries";

const PracticalSection = (props)=>{
    const { practicalExperience } = props;
    return( 
        <div id="practical-section">
            <ul id="practical-entries">
                <FormHeader id={"practical-experience-header"} value="Practical Experience" />
                <PracticalEntries practicalExperience = { practicalExperience } />
            </ul>
        </div>
    );
}

export default PracticalSection;