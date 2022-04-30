import React from "react";
import DateItem from "../DateItem";
import FormHeader from "./FormHeader";
import TextItem from "./TextItem";

const EducationInfoForm = ()=>{
    return(
        <div id="educational-experience-form-container">
            <FormHeader id="education-info-header" value="Educational Experience:"/>
            <form id="educational-experience-form">
                <ul id="educational-experience-form-items">
                    <TextItem id={"school"} name={"school"} value={"School:"}/>
                    <TextItem id={"degree"} name={"degree"} value={"Degree:"}/>
                    <DateItem id={"start-date"} name={"startDate"} value={"Start Date:"} />
                    <DateItem id={"end-date"} name={"endDate"} value={"End Date:"} />
                </ul>    
            </form>
        </div> 
    )
}

export default EducationInfoForm;