import React from "react";
import EmailItem from "./EmailItem";
import FormHeader from "./FormHeader";
import PhoneItem from "./PhoneItem";
import TextItem from "./TextItem";

const GeneralInfoForm = (props)=>{
    const  {handleChange} = props.methods
    
    const generalInfo = {
        fullName: props.state.fullName,
        email: props.state.email,
        phone: props.state.phone
    }
    return(
        <div id="general-info-form-container">
            <FormHeader id="general-info-header" value="General Information"/>
            <form id="general-info-form" name={"generalInfo"}>
                <ul id="general-info-form-items">
                    <TextItem id={"full-name"} name={"fullName"} labelValue={"Full Name:"}
                              handleChange={handleChange} textValue={generalInfo.fullName}
                    />
                    <EmailItem id={"email"} name={"email"} labelValue={"Email:"}
                               handleChange={handleChange} emailValue={generalInfo.email}
                    />
                    <PhoneItem id={"phone"} name={"phone"} labelValue={"Phone Number:"}
                               handleChange={handleChange} phoneValue={generalInfo.phone}
                    />
                </ul>    
            </form>
        </div> 
    )
}

export default GeneralInfoForm;