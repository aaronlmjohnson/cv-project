import React from "react";

const PracticalInfoForm = (props)=>{
    const {entryInfo} = props;
    const {submitEdit, handleEntryChange} = props.methods
    return(
        <div id="practical-experience-form-container">
            <form id="practical-experience-form" onSubmit={(e)=>{submitEdit(e, entryInfo.id, "practicalEntries")}}>
                <ul id="practical-experience-form-items">
                    <li className="form-item">
                        <label htmlFor={"company"}> {"Company Name:"} </label>
                        <input type="text" name={"company"} 
                               onChange={(e)=>{handleEntryChange(e, entryInfo.id, "practicalEntries")}} value={entryInfo.company}/>
                    </li>
                    <li className="form-item">
                        <label htmlFor={"position"}> {"Position Title:"} </label>
                        <input type="text" name={"position"} 
                               onChange={(e)=>{handleEntryChange(e, entryInfo.id, "practicalEntries")}} value={entryInfo.position}/>
                    </li>
                    <li className="form-item">
                        <label htmlFor={"workStartDate"}> {"Start Date:"} </label>
                        <input type="date" name={"workStartDate"} 
                               onChange={(e)=>{handleEntryChange(e, entryInfo.id, "practicalEntries")}} value={entryInfo.workStartDate}/>
                    </li>
                    <li className="form-item">
                        <label htmlFor={"workEndDate"}> {"End Date:"} </label>
                        <input type="date" name={"workEndDate"} 
                               onChange={(e)=>{handleEntryChange(e, entryInfo.id, "practicalEntries")}} value={entryInfo.workEndDate}/>
                    </li>
                    <li className="form-item">
                        <label htmlFor={"tasks"}> {"Responsibilities:"} </label>
                        <textarea name={"tasks"} 
                               onChange={(e)=>{handleEntryChange(e, entryInfo.id, "practicalEntries")}} value={entryInfo.tasks} row="4" cols="50"/>
                    </li>
                    <li className="form-item">
                        <input type="submit" value="Submit"/>
                    </li>
                    <li className="form-item">
                        <input type="button" value="Cancel" onClick={(e)=> props.methods.toggleEditStatus(e, entryInfo.id, "educationEntries")}/>
                    </li>
                </ul>    
            </form>
        </div> 
    )
}

export default PracticalInfoForm;