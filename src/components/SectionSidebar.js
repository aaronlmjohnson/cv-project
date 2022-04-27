import React from "react";
import SectionButton from "./SectionButton";
import "./SectionSidebar.css"

const SectionSidebar = ()=>{
    return(
        <div id= "section-sidebar">
            <SectionButton name={"general-button"} value={"General Information"}/>
            <SectionButton name={"education-button"} value={"Education Experience"}/>
            <SectionButton name={"practical-button"} value={"Practical Experience"}/>
            <SectionButton name={"preview-button"} value={"Preview"}/>
        </div>
    )
}

export default SectionSidebar;