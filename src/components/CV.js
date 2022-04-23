import React from "react";
import GeneralInfo from "./GeneralInfo";

const CV = (props)=>{
    const { user, generalInfo } = props;

    const isGeneralInfoSubmitted = ()=>{
        if(user.generalInfo.isSubmitted && user.generalInfo.activeSection){
            return <GeneralInfo 
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