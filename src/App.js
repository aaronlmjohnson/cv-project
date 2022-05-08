import React, { Component } from "react";
import CvContainer from "./components/CvContainer";
import "./App.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeForm: "general"
    }

    this.changeForm = this.changeForm.bind(this)
  };

  changeForm = (e)=>{
    this.setState({
      activeForm: e.target.name
    })
  }

  render() {
    const {activeForm} = this.state
    return (
        <CvContainer 
          activeForm={activeForm}
          changeForm={this.changeForm}
        />
    );
  }
}

export default App;