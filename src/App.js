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
      educationInfoPresent: false,
      educationEntries: [
          {school:"University of Arkansas",
        degree:"Music",
        schoolStartDate:"2008-08-20",
        schoolEndDate:"2012-05-20",
        id: uniqid(),
        isBeingEdited: false}
    ],
      practicalEntries:[
        {
          company:"K-Mart",
          position:"Sale Associate",
          workStartDate:"2013-03-06",
          workEndDate:"2014-01-01",
          tasks:"stocked shelves, unloaded trucks, cash register, garden center",
          id: uniqid(),
          isBeingEdited: false
        }
      ]
    }
//,
    this.changeForm = this.changeForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addEducationEntry = this.addEducationEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.handleEntryChange = this.handleEntryChange.bind(this);
    this.addPracticalEntry = this.addPracticalEntry.bind(this);
    this.toggleEditStatus = this.toggleEditStatus.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
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

  handleEntryChange = (e, key, entryName)=>{
      let entries = [...this.state[entryName]];
      let entry = entries.find((entry)=> key === entry.id);
      entry[e.target.name] = e.target.value
      this.setState({[entryName]: entries});
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
          schoolStartDate:"",
          schoolEndDate:"",
          id: uniqid(),
          isBeingEdited: false
        }]});
    });
  }

  addPracticalEntry = ()=>{
      this.setState(prevState =>{
        return ({...prevState, practicalEntries: [...prevState.practicalEntries, {
          company:"",
          position:"",
          workStartDate:"",
          workEndDate:"",
          tasks:"",
          id: uniqid(),
          isBeingEdited: false
        }]});
      });
  }

  deleteEntry = (e, entriesName)=>{
    console.log(e.target.parentNode.getAttribute('react-key'));
    this.setState( prevState =>{
      const key = e.target.parentNode.getAttribute('react-key');
      const filteredEntries = prevState[entriesName].filter( entry => entry.id !== key);
      return ({...prevState, [entriesName]:filteredEntries})
    })
    
  }

  toggleEditStatus = (e, key, entryName) =>{
      let entries = [...this.state[entryName]];
      let entry = entries.find((entry)=> key === entry.id);
      entry.isBeingEdited = entry.isBeingEdited === false ? true : false;
      this.setState({[entryName]: entries});
  }

  submitEdit = (e, key, entryName)=>{
    e.preventDefault()
    this.toggleEditStatus(e, key, entryName);
  }

  cancelEdit = (e)=>{
    
  }

  render() {
    
    const methods = {
      handleChange: this.handleChange,
      changeForm: this.changeForm,
      handleEntryChange: this.handleEntryChange,
      addEducationEntry: this.addEducationEntry,
      addPracticalEntry: this.addPracticalEntry,
      deleteEntry: this.deleteEntry,
      toggleEditStatus: this.toggleEditStatus,
      submitEdit: this.submitEdit
    }
    

    return (
        <CvContainer
          state={this.state}
          methods={
            methods
          }
        />
    );
  }
}

export default App;