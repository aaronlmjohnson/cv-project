import React, {Component} from "react";


class UserInfo extends Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
 
    const {generalInfo}= this.props.user;
    
    return(
      <div>
        {
         Object.keys(generalInfo).map(key=>{

          return (<p>{generalInfo[key]}</p>);
         })
        }
      </div>
    )
  }
};

export default UserInfo;