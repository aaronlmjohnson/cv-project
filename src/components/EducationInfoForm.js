import React from "react";
import DateItem from "./DateItem";
import TextItem from "./TextItem";

const EducationInfoForm = (props)=>{
    const {entryInfo, handleEntryChange} = props
    
    return(
        <li className="educational-experience-form-container" key={entryInfo.id}>
            <form className="educational-experience-form">
                <ul className="educational-experience-form-items">
                    <li className="form-item">
                        <label htmlFor={"school"}> {"School:"} </label>
                        <input type="text" name={"school"} onChange={(e)=>{handleEntryChange(e, entryInfo.id)}} value={entryInfo.school}/>
                    </li>

                    <TextItem className={"degree"} name={"degree"} labelValue={"Degree:"}/>
                    <DateItem className={"school-start-date"} name={"schoolStartDate"} labelValue={"Start Date:"} />
                    <DateItem className={"school-end-date"} name={"schoolEndDate"} labelValue={"End Date:"} />
                </ul>    
            </form>
            <br/>
        </li> 
    )
}

export default EducationInfoForm;