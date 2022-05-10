import React, { Component } from "react";
import CvContainer from "./components/CvContainer";
import "./App.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeForm: "general",
      fullName: "",
      email:"",
      phone:"",
      contactInfoPresent: false,
      generalInfo: {
        fullName: "",
        email:"",
        phone:""
      },
    }

    this.changeForm = this.changeForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleContactHeaderDisplay = ()=>{
    this.setState(prevState =>{
      if(prevState.email || prevState.phone)
        return({...prevState,contactInfoPresent: true})
      else
        return({...prevState, contactInfoPresent: false})
    });
  }

  render() {
    const {activeForm} = this.state
    const generalInfo = {fullName: this.state.fullName,
                         email: this.state.email, 
                         phone: this.state.phone,
                         contactInfoPresent: this.state.contactInfoPresent
                        }
    return (
        <CvContainer 
          activeForm={activeForm}
          changeForm={this.changeForm}
          handleChange={this.handleChange}
          generalInfo = {generalInfo}
        />
    );
  }
}

export default App;