import React, {Component} from "react";


class UserInfo extends Component {
  
  render(){
    return(
      <div>
        {
         Object.keys(this.props.generalInfo).map(key=>{

          return (<p>{this.props.generalInfo[key]}</p>);
         })
        }
      </div>
    )
  }
};

export default UserInfo;