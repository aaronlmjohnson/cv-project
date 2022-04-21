import React from "react";
import UserInfo from "./UserInfo";

const CV = (props)=>{
    const { user, generalInfo } = props;

    const isGeneralInfoSubmitted = ()=>{
        if(user.generalInfo.isSubmitted){
            return <UserInfo 
                    user= {user} 
                    generalInfo = {generalInfo}
                    handleEdit = {props.handleEdit} 
                    handleChange = {props.handleChange}
                    onSubmit = {props.onSubmit}
                  />;
        } 
        return (<div></div>)
        
    }
    return (
        <div id="cv">
            {isGeneralInfoSubmitted()}
        </div>
    );
}

export default CV;