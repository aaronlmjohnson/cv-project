import React from "react";
import UserInfo from "./UserInfo";

const CV = (props)=>{
    const { generalInfo } = props.user;

    return (
        <div id="cv">
            <UserInfo generalInfo = {generalInfo}/> 
        </div>
    );
}

export default CV;