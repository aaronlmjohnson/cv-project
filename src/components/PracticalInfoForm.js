import React from "react";

const PracticalInfoForm = (props)=>{
    const {entryInfo, handleEntryChange} = props;
    return(
        <div id="practical-experience-form-container">
            <form id="practical-experience-form">
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
                </ul>    
            </form>
        </div> 
    )
}

export default PracticalInfoForm;