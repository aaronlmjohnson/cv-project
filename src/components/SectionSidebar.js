import React from "react";
import './SectionSidebar.css';

const SectionSidebar = (props)=>{
    return (
        <ul id="section-sidebar">
            <li class="cv-section"><button id="general-info-button">General Info</button></li>
            <li class="cv-section"><button id="educational-experience-button">Educational Experience</button></li>
            <li class="cv-section"><button id="practical-experience-button">Practical Experience</button></li>
        </ul>
    )
}

export default SectionSidebar;