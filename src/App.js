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
      generalInfo: {
        fullName: "",
        email:"",
        phone:""
      },
    }

    this.changeForm = this.changeForm.bind(this)
    this.handleChange = this.handleChange.bind(this);
  };

  changeForm = (e)=>{
    this.setState({
      activeForm: e.target.name
    })
  }

  handleChange = (e)=>{
    const name = e.target.name;
    
    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  render() {
    const {activeForm} = this.state
    return (
        <CvContainer 
          activeForm={activeForm}
          changeForm={this.changeForm}
          handleChange={this.handleChange}
          generalInfo = {{fullName: this.state.fullName, email: this.state.email}}
        />
    );
  }
}

export default App;