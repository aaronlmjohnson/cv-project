import React from "react";
import DateItem from "../DateItem";
import FormHeader from "./FormHeader";
import TextItem from "./TextItem";

const PracticalInfoForm = ()=>{
    return(
        <div id="practical-experience-form-container">
            <FormHeader id="practical-info-header" value="Practical Experience:"/>
            <form id="practical-experience-form">
                <ul id="practical-experience-form-items">
                    {/* <TextItem id={"school"} name={"school"} value={"School:"}/>
                    <TextItem id={"degree"} name={"degree"} value={"Degree:"}/>
                    <DateItem id={"start-date"} name={"startDate"} value={"Start Date:"} />
                    <DateItem id={"end-date"} name={"endDate"} value={"End Date:"} /> */}
                </ul>    
            </form>
        </div> 
    )
}

export default PracticalInfoForm;