import React from "react";


const GeneralForm = (props)=>{
    const generalInput = (value, type, id, labelValue)=>{
        return(
            <div className="general-form-input">
                <label htmlFor={id}>{labelValue}</label>
                <input
                    onChange={props.handleChange}
                    value={value}
                    type = {type}
                    id= {id}
                />
            </div>
        ) 
    }
    const { fullName, email, phone } = props;

    return (
        <form id="general-info-form" onSubmit={props.onSubmitTask}>
            {generalInput(fullName , "text", "full-name", "Full Name")} 
            {generalInput(email, "email", "email", "E-mail")}
            {generalInput(phone, "phone", "phone", "Phone Number")}
            <button type="submit">Submit</button>
        </form>
    )
}


export default GeneralForm;