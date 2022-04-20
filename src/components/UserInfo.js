import React from "react";

const UserInfo = (props)=> {
  
  const {generalInfo, handleEdit} = props;
  
  return(
    <div id="general-info-container">
      <h1>General Information</h1>
      <ul key={generalInfo.id} id="general-info">
        {
          Object.keys(generalInfo).filter((key)=> key !== "id" && key !== "isSubmitted").map(key=>{
            return (<li id={key} key={generalInfo[key].id}>{generalInfo[key].text}</li>);
          })
        }
      </ul>
      <button id="edit-general-info" onClick={handleEdit}>Edit</button>
    </div>
    
  )
}


export default UserInfo;