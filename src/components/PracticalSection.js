import React from "react";
import FormHeader from "./FormHeader";
import PracticalEntries from "./PracticalEntries";

const PracticalSection = (props)=>{
    const { practicalEntries } = props;
    const displayHeader = ()=>{
        if(practicalEntries.length > 0)
            return (<FormHeader id={"practical-experience-header"} value="Practical Experience" />);
    }
    return( 
        <div id="practical-section">
            {displayHeader()}
            <ul id="practical-entries">
                <PracticalEntries practicalEntries = { practicalEntries } />
            </ul>
        </div>
    );
}

export default PracticalSection;