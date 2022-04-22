import React from "react";


const GeneralInfoForm = (props)=>{
    const generalInput = (value, type, id, name, labelValue)=>{
        return(
            <div className="general-form-input">
                <label htmlFor={id}>{labelValue}</label>
                <input
                    onChange={props.handleChange}
                    value={value}
                    type = {type}
                    id= {id}
                    name={name}
                />
            </div>
        ) 
    }

    const { fullName, email, phone } = props;
    return (
        <div id="general-info-form-section">
            <h1>General Information</h1>
            <form id="general-info-form" onSubmit={props.onSubmit}>
                {generalInput(fullName , "text", "full-name", "fullName", "Full Name")} 
                {generalInput(email, "email", "email", "email", "E-mail")}
                {generalInput(phone, "phone", "phone", "phone", "Phone Number")}
                <button type="submit">Submit</button>
            </form>
        </div>
        
    )
}


export default GeneralInfoForm;