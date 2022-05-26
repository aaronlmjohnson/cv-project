import React from "react";
import FormHeader from "./FormHeader";

const ContactSection = (props)=>{
    const { generalInfo } = props;

    const doubleClick = (e)=>{
        console.log(e.target);
    }
    const displayContactHeader = ()=>{
        if(generalInfo.contactInfoPresent) 
            return <FormHeader id={"contact-header"} value="Contact Information" />
    }
    return( 
        <div id="contact-section">
            <ul id="contact-entries">
                {displayContactHeader()}
                <li onDoubleClick={doubleClick} id="contact-email" name="email">{ generalInfo.email }</li>
                <li id="phone">{ generalInfo.phone} </li>    
            </ul>
        </div>
    );
}

export default ContactSection;