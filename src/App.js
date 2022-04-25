import React, { Component } from "react";
import CV from "./components/CV";
import GeneralInfoForm from "./components/GeneralInfoForm";
import uniqid from "uniqid";
import SectionSidebar from "./components/SectionSidebar";
import "./App.css";
import EducationInfoForm from "./components/EducationInfoForm";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user:{
        generalInfo:{},
        educationInfo:{},
        practicalInfo:{}
      },
      generalInfo:{
        fullName: {text:'', id: uniqid()},
        email:{text:'', id: uniqid()},
        phone:{text:'', id: uniqid()},
        id:uniqid(),
        isSubmitted: false,
        isBeingEdited: false,
        activeSection: true
      },
      educationInfo: {
        school: {text:'', id: uniqid()},
        major: {text:'', id:uniqid()},
        startDate:{text:'', id:uniqid()},
        endDate:{text:'', id:uniqid()},
        isSubmitted: false,
        isBeingEdited: false,
        activeSEction: false
      }  
  };
}

  handleChange = (e) => {
    this.setState(prevState => ({
      generalInfo: {
        ...prevState.generalInfo,
        [e.target.name]:{
          ...prevState.generalInfo[e.target.name],
          text: e.target.value
        } 
      },
      educationInfo: {
        ...prevState.educationInfo,
        [e.target.name]:{
          ...prevState.educationInfo[e.target.name],
          text: e.target.value
        }
      }
    }));
  };

  handleEdit = (e)=>{
    this.setState(prevState =>({
      user:{
        generalInfo:{
          ...prevState.user.generalInfo,
          isBeingEdited: true
        }
      },
      generalInfo:{
        ...prevState.user.generalInfo
      }
    }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.setState({
        user:{
          generalInfo: {
            ...this.state.generalInfo,
            isSubmitted: true,
            isBeingEdited: false,
            activeSection: true
          }
        },
        generalInfo: {
          fullName:{text:'', id: uniqid()},
          email: {text:'', id: uniqid()},
          phone: {text:'', id: uniqid()},
          id: uniqid(),
          isSubmitted: false,
          isBeingEdited: false
        }, 
    });
  };

  changeSection = (e)=>{
    const [general, education, practical] = ["general-info-button", "educational-experience-button", "practical-experience-button"];
    
    if(e.target.id === general){
      this.setState({
        user:{
          generalInfo:{...this.state.user.generalInfo, activeSection: true}
        },
        generalInfo:{...this.state.generalInfo, activeSection: true}
      })
    } else if(e.target.id === education){
      this.setState({
        user:{
          generalInfo:{...this.state.user.generalInfo, activeSection: false}
        },
        generalInfo:{...this.state.generalInfo, activeSection: false}
      })
    } else{
      this.setState({
        user:{
          generalInfo:{...this.state.user.generalInfo, activeSection: false}
        },
        generalInfo:{...this.state.generalInfo, activeSection: false}
      })
    }
  }

  displayView = ()=>{
    const {generalInfo, educationInfo} = this.state

    if(!this.state.user.generalInfo.isSubmitted && generalInfo.activeSection){
      return (
        <GeneralInfoForm 
          generalInfo = {this.state.generalInfo}
          user = {this.state}
          handleChange={this.handleChange.bind(this)}
          onSubmit={this.onSubmit.bind(this)}
        />
      )
    }else if(!this.user.educationInfo.isSubmitted && educationInfo.activeSection){
      console.log("edu")
    }

    return (
      <CV 
          user ={this.state.user}
          generalInfo={this.state.generalInfo}
          handleEdit = {this.handleEdit.bind(this)}
          handleChange = {this.handleChange.bind(this)}
          onSubmit = {this.onSubmit.bind(this)}
        />
    )
  }

  render() {
    return (
      <div id="content">
        <SectionSidebar changeSection={this.changeSection.bind(this)}/>
        {this.displayView()}
      </div>
    );
  }
}

export default App;