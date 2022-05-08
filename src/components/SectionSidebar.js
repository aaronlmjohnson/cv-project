import React from "react";
import SectionButton from "./SectionButton";
import "./SectionSidebar.css"

const SectionSidebar = (props)=>{
    return(
        <div id= "section-sidebar">
            <SectionButton changeForm = {props.changeForm} name={"general"} value={"General Information"}/>
            <SectionButton changeForm = {props.changeForm} name={"education"} value={"Education Experience"}/>
            <SectionButton changeForm = {props.changeForm} name={"practical"} value={"Practical Experience"}/>
            <SectionButton changeForm = {props.changeForm} name={"preview"} value={"Preview"}/>
        </div>
    )
}

export default SectionSidebar;