import React from "react";
import SectionButton from "./SectionButton";
import "./SectionSidebar.css"

const SectionSidebar = ()=>{
    return(
        <div id= "section-sidebar">
            <SectionButton name={"general"} value={"General Information"}/>
            <SectionButton name={"education"} value={"Education Experience"}/>
            <SectionButton name={"practical"} value={"Practical Experience"}/>
            <SectionButton name={"preview"} value={"Preview"}/>
        </div>
    )
}

export default SectionSidebar;