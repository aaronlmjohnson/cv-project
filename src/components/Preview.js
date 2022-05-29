import React from "react";
import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import FormHeader from "./FormHeader";
import PracticalSection from "./PracticalSection";
import "./Preview.css";

const Preview = (props)=>{
    const generalInfo = {fullName: props.state.fullName,
         email: props.state.email,
         phone: props.state.phone,
         contactInfoPresent: props.state.contactInfoPresent
        };

    return(
        
        <div id="preview">
            <FormHeader id={"full-name-preview"} value={generalInfo.fullName}/>
            <ContactSection generalInfo = { generalInfo }/>
            <EducationSection state={props.state} methods={props.methods}/>
            {/* <PracticalSection practicalEntries = {practicalEntries} /> */}
        </div>
    )
}

export default Preview;