import React from "react";
import DateItem from "./DateItem";
import TextItem from "./TextItem";

const EducationInfoForm = (props)=>{
    const {entryInfo, handleEntryChange} = props

    return(
        <li className="educational-experience-form-container">
            <form className="educational-experience-form">
                <ul className="educational-experience-form-items">
                    <li className="form-item">
                        <label htmlFor={"school"}> {"School:"} </label>
                        <input type="text" name={"school"} onChange={(e)=>{handleEntryChange(e, entryInfo.id)}} value={entryInfo.school}/>
                    </li>
                    <li className="form-item">
                        <label htmlFor={"degree"}> {"Degree:"} </label>
                        <input type="text" name={"degree"} onChange={(e)=>{handleEntryChange(e, entryInfo.id)}} value={entryInfo.degree}/>
                    </li>
                    <li className="form-item">
                        <label htmlFor={"schoolStartDate"}> {"Start Date:"} </label>
                        <input type="date" name={"schoolStartDate"} onChange={(e)=>{handleEntryChange(e, entryInfo.id)}} value={entryInfo.schoolStartDate}/>
                    </li>
                    <li className="form-item">
                        <label htmlFor={"schoolEndDate"}> {"End Date:"} </label>
                        <input type="date" name={"schoolEndDate"} onChange={(e)=>{handleEntryChange(e, entryInfo.id)}} value={entryInfo.schoolEndDate}/>
                    </li>
                </ul>    
            </form>
            <br/>
        </li> 
    )
}

export default EducationInfoForm;