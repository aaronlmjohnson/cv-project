import React from "react";

const UserInfo = (props)=> {
  
  const {generalInfo} = props;

  return(
    <ul key={generalInfo.id} id="general-info">
      {
        Object.keys(generalInfo).filter((key)=> key !== "id").map(key=>{
          return (<li id={key}>{generalInfo[key]}</li>);
        })
      }
    </ul>
  )
}


export default UserInfo;