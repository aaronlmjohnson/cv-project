import React from "react";

const EditEducationEntryForm = (props)=>{
    const {entryInfo} = props
    const {handleEntryChange, submitEdit} = props.methods
    
    return(
        <form className="educational-experience-form" onSubmit={(e)=>{props.methods.toggleEditStatus(e, entryInfo.id, "educationEntries")} }>
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
                <li className="form-item">
                    <input type="submit" value="Submit"/>
                </li>
                <li className="form-item">
                    <input type="button" value="Cancel" onClick={(e)=> props.methods.toggleEditStatus(e, entryInfo.id, "educationEntries")}/>
                </li>
                
            </ul>    
        </form>
    )
}

export default EditEducationEntryForm;