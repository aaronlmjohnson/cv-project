import React from "react";
import UserInfo from "./UserInfo";

const CV = (props)=>{
    const { generalInfo } = props.user;

    const isGeneralInfoSubmitted = ()=>{
        if(generalInfo.isSubmitted) return <UserInfo generalInfo = {generalInfo} handleEdit = {props.handleEdit}/>;
        return (<div></div>)
        
    }
    return (
        <div id="cv">
            {isGeneralInfoSubmitted()}
        </div>
    );
}

export default CV;