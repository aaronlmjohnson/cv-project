import React from "react";
import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import FormHeader from "./FormHeader";
import PracticalSection from "./PracticalSection";
import "./Preview.css";

const Preview = (props)=>{
    const {fullName} = props.generalInfo;
    const {handleChange, educationEntries, practicalEntries, deleteEntry} = props;

    return(
        
        <div id="preview">
            <FormHeader id={"full-name-preview"} value={fullName}/>
            <ContactSection generalInfo = { props.generalInfo }/>
            <EducationSection educationEntries = {educationEntries} deleteEntry={deleteEntry}/>
            <PracticalSection practicalEntries = {practicalEntries} />
        </div>
    )
}

export default Preview;