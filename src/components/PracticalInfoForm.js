import React from "react";
import DateItem from "../DateItem";
import FormHeader from "./FormHeader";
import TextArea from "./TextArea";
import TextItem from "./TextItem";

const PracticalInfoForm = ()=>{
    return(
        <div id="practical-experience-form-container">
            <FormHeader id="practical-info-header" value="Practical Experience:"/>
            <form id="practical-experience-form">
                <ul id="practical-experience-form-items">
                <TextItem id={"company-name"} name={"companyName"} value={"Company Name:"}/>
                <TextItem id={"position-title"} name={"positionTitle"} value={"Position Title:"}/>
                <DateItem id={"work-start-date"} name={"workStartDate"} value={"Start Date:"} />
                <DateItem id={"work-end-date"} name={"workEndDate"} value={"End Date:"} />
                <TextArea id={"job-tasks"} name={"jobTasks"} value={"Job Tasks:"}/>
                </ul>    
            </form>
        </div> 
    )
}

export default PracticalInfoForm;