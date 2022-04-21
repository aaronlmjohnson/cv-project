import React from "react";

const UserInfo = (props)=> {
  
  const {generalInfo, handleEdit, handleChange} = props;

  const editView = ()=>{
    
    return (
    <form id="edit-general-info">
      <label htmlFor="full-name"></label>
      <input 
        onChange={handleChange}
        value={generalInfo.fullName.text}
        type="text"
        id="full-name"
      />
    </form>
    )
  }

  const displayView = ()=>{
    if(generalInfo.isBeingEdited)
      return editView();
    return (
      <ul key={generalInfo.id} id="general-info">
        {
          ["fullName", "email", "phone"].map(key=>{
            return (<li id={key} key={generalInfo[key].id}>{generalInfo[key].text}</li>);
          })
        }
      </ul>
    )
  }
  return(
    <div id="general-info-container">
      <h1>General Information</h1>
        {displayView()}
      <button id="edit-general-info" onClick={handleEdit}>Edit</button>
    </div>
    
  )
}


export default UserInfo;