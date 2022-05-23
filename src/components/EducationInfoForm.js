import React from "react";

const EducationInfoForm = (props)=>{
    const {entryInfo, handleEntryChange} = props

    return(
        <form className="educational-experience-form">
            <ul className="educational-experience-form-items">
                <li className="form-item">
                    <label htmlFor={"school"}> {"School:"} </label>
                    <input type="text" name={"school"} onChange={(e)=>{handleEntryChange(e, entryInfo.id, "educationEntries")}} value={entryInfo.school}/>
                </li>
                <li className="form-item">
                    <label htmlFor={"degree"}> {"Degree:"} </label>
                    <input type="text" name={"degree"} onChange={(e)=>{handleEntryChange(e, entryInfo.id, "educationEntries")}} value={entryInfo.degree}/>
                </li>
                <li className="form-item">
                    <label htmlFor={"schoolStartDate"}> {"Start Date:"} </label>
                    <input type="date" name={"schoolStartDate"} onChange={(e)=>{handleEntryChange(e, entryInfo.id, "educationEntries")}} value={entryInfo.schoolStartDate}/>
                </li>
                <li className="form-item">
                    <label htmlFor={"schoolEndDate"}> {"End Date:"} </label>
                    <input type="date" name={"schoolEndDate"} onChange={(e)=>{handleEntryChange(e, entryInfo.id, "educationEntries")}} value={entryInfo.schoolEndDate}/>
                </li>
            </ul>    
        </form>
    )
}

export default EducationInfoForm;