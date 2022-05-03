import React from "react";
import FormHeader from "./FormHeader";

const ContactSection = (props)=>{
    const { generalInfo } = props;
    return( 
        <div id="contact-section">
            <ul id="contact-entries">
                <FormHeader id={"contact-header"} value="Contact Information" />
                <li id="contact-email">{ generalInfo.email }</li>
                <li id="phone">{ generalInfo.phone} </li>    
            </ul>
        </div>
    );
}

export default ContactSection;