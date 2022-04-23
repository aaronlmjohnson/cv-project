import React from "react";
import './SectionSidebar.css';

const SectionSidebar = (props)=>{
    const {changeSection} = props;
    return (
        <ul id="section-sidebar">
            <li className="cv-section"><button onClick={changeSection} id="general-info-button">General Info</button></li>
            <li className="cv-section"><button onClick={changeSection} id="educational-experience-button">Educational Experience</button></li>
            <li className="cv-section"><button onClick={changeSection} id="practical-experience-button">Practical Experience</button></li>
        </ul>
    )
}

export default SectionSidebar;