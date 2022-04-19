import React, {Component} from "react";


class UserInfo extends Component {
  
  render(){
    const {generalInfo} = this.props;
    return(
      <ul key={generalInfo.id} id="general-info">
        {
         Object.keys(generalInfo).filter((key)=> key !== "id").map(key=>{
            return (<li>{generalInfo[key]}</li>);
         })
        }
      </ul>
    )
  }
};

export default UserInfo;