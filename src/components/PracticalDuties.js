import React from "react";
import  uniqid  from "uniqid";
import FormHeader from "./FormHeader";

const PracticalDuties = (props)=>{
    const { duties } = props;
    
    const processDuties = ()=>{
        return duties.split(',').map((duty, i)=>{
            return <li className="duty" key={uniqid()}>{duty}</li>
        });
    }
    return( 
        
        <ul id="duties">
            <li><h2>Responsibilities: </h2></li>
            {processDuties()}
        </ul>
    );
}

export default PracticalDuties;