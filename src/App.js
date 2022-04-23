import React, { Component } from "react";
import CV from "./components/CV";
import GeneralInfoForm from "./components/GeneralInfoForm";
import uniqid from "uniqid";
import SectionSidebar from "./components/SectionSidebar";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user:{
        generalInfo:{},
      },
      generalInfo:{
        fullName: {text:'', id: uniqid()},
        email:{text:'', id: uniqid()},
        phone:{text:'', id: uniqid()},
        id:uniqid(),
        isSubmitted: false,
        isBeingEdited: false
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
    if(e.target.id === "general-info-button"){
      this.setState({
        user:{
          generalInfo:{...this.state.user.generalInfo, activeSection: true}
        }
      })
    }else{
      this.setState({
        user:{
          generalInfo:{...this.state.user.generalInfo, activeSection: false}
        }
      })
    }
  }

  displayView = ()=>{
    const {generalInfo} = this.state.user

    if(!generalInfo.isSubmitted){
      return (
        <GeneralInfoForm 
          generalInfo = {this.state.generalInfo}
          user = {this.state}
          handleChange={this.handleChange.bind(this)}
          onSubmit={this.onSubmit.bind(this)}
        />
      )
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