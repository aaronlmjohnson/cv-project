import React from "react";
import EmailItem from "./EmailItem";
import FormHeader from "./FormHeader";
import PhoneItem from "./PhoneItem";
import TextItem from "./TextItem";

const GeneralInfoForm = (props)=>{
    return(
        <div id="general-info-form-container">
            <FormHeader id="general-info-header" value="General Information"/>
            <form id="general-info-form" name={"generalInfo"}>
                <ul id="general-info-form-items">
                    <TextItem id={"full-name"} name={"fullName"} labelValue={"Full Name:"} handleChange={props.handleChange} textValue={props.generalInfo.fullName}/>
                    <EmailItem id={"email"} name={"email"} labelValue={"Email:"}
                               handleChange={props.handleChange} emailValue={props.generalInfo.email}
                    />
                    <PhoneItem id={"phone"} name={"phone"} labelValue={"Phone Number:"}
                               handleChange={props.handleChange} phoneValue={props.generalInfo.phone}
                    />
                </ul>    
            </form>
        </div> 
    )
}

export default GeneralInfoForm;