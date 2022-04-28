import React from "react";
import EmailItem from "./EmailItem";
import FormHeader from "./FormHeader";
import TextItem from "./TextItem";

const GeneralInfoForm = ()=>{
    return(
        <div id="general-info-form-container">
            <FormHeader id="general-info-header" value="General Information"/>
            <form id="general-info-form">
                <ul id="general-info-form-items">
                    <TextItem id={"full-name"} name={"fullName"} value={"Full Name:"}/>
                    <EmailItem id={"email"} name={"email"} value={"Email:"}/>
                    
                </ul>    
            </form>
        </div> 
    )
}

export default GeneralInfoForm;