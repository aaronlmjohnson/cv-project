import React from "react";

const GeneralInfo = (props)=> {
  
  const {user, handleEdit, handleChange, generalInfo} = props;

  const editView = ()=>{
    return (
    <form id="edit-general-info" onSubmit={props.onSubmit} >
      <label htmlFor="full-name-edit"></label>
      <input 
        onChange={handleChange}
        value={generalInfo.fullName.text}
        type="text"
        id="full-name-edit"
        name="fullName"
      />
      <label htmlFor="email-edit"></label>
      <input 
        onChange={handleChange}
        value={generalInfo.email.text}
        type="text"
        id="email-edit"
        name="email"
      />
      <label htmlFor="phone-edit"></label>
      <input 
        onChange={handleChange}
        value={generalInfo.phone.text}
        type="text"
        id="phone-edit"
        name="phone"
      />
      
      <button type="submit">Submit</button>
    </form>
    )
  }

  const displayView = ()=>{
    const {generalInfo} = user;
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

  const editButton = ()=>{
    if(!user.generalInfo.isBeingEdited)
      return (<button id="edit-general-info" onClick={handleEdit}>Edit</button>)
  }
  return(
    <div id="general-info-container">
      <h1>General Information</h1>
        {displayView()}
        {editButton()}
      
    </div>
    
  )
}


export default GeneralInfo;