import React, { Component } from "react";
import CvContainer from "./components/CvContainer";
import "./App.css"
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeForm: "general",
      fullName: "",
      email:"",
      phone:"",
      contactInfoPresent: false,
      educationEntries: []
    }

    this.changeForm = this.changeForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addEducationEntry = this.addEducationEntry.bind(this);
    this.handleEntryChange = this.handleEntryChange.bind(this);
  };

  changeForm = (e)=>{
    this.setState({
      activeForm: e.target.name
    });
  }

  handleChange = (e)=>{
    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));

    this.handleContactHeaderDisplay();
  }

  handleEntryChange = (e, key)=>{
    console.log(this.state);
    this.setState(prevState => {
      
      const selectedEntry = prevState.educationEntries.find( entry => entry.id === key);
      const prevEntries = prevState.educationEntries.filter( entry => entry.id !== key);
      selectedEntry[e.target.name] = e.target.value;
      return ({...prevState, educationEntries:[...prevEntries, selectedEntry]})
    })
  }

  handleContactHeaderDisplay = ()=>{
    this.setState(prevState =>{
      if(prevState.email || prevState.phone)
        return({...prevState,contactInfoPresent: true})
      else
        return({...prevState, contactInfoPresent: false})
    });
  }

  addEducationEntry = ()=>{
    this.setState(prevState =>{
        return ({...prevState, educationEntries: [...prevState.educationEntries, {
          school:"",
          degree:"",
          startDate:"",
          endDate:"",
          id: uniqid()
        }]});
    });
  }

  render() {
    const {activeForm, educationEntries} = this.state
    const generalInfo = {fullName: this.state.fullName,
                         email: this.state.email, 
                         phone: this.state.phone,
                         contactInfoPresent: this.state.contactInfoPresent
                        }

    return (
        <CvContainer 
          activeForm={activeForm}
          educationEntries = {educationEntries}
          changeForm={this.changeForm}
          handleChange={this.handleChange}
          handleEntryChange={this.handleEntryChange}
          generalInfo = {generalInfo}
          addEducationEntry = {this.addEducationEntry}
        />
    );
  }
}

export default App;